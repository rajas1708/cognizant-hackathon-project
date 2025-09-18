# # # from fastapi import FastAPI, HTTPException
# # # from pydantic import BaseModel, Field

# # # # Initialize the FastAPI app
# # # app = FastAPI(
# # #     title="Medical Device Failure Prediction API",
# # #     version="1.0.0"
# # # )

# # # # Define the structure of the input data from the form
# # # class DeviceAttributes(BaseModel):
# # #     device_type: str = Field(..., example="X-Ray")
# # #     device_id: str = Field(..., example="XR-12345")
# # #     age_of_device: int = Field(..., example=10)
# # #     temperature: int = Field(..., example=40)
# # #     voltage_fluctuations: str = Field(..., example="Yes")
# # #     humidity: int = Field(..., example=60)
# # #     vibration_level: str = Field(..., example="Low")
# # #     error_counts: int = Field(..., example=4)
# # #     last_serviced_date: str = Field(..., example="25/11/2023")

# # # # --- DUMMY ML MODEL LOGIC ---
# # # # This function simulates your real ML model.
# # # # When ready, replace this logic with loading and running your actual model.
# # # def get_dummy_prediction(data: DeviceAttributes) -> float:
# # #     risk_score = 0.0
# # #     if data.age_of_device > 8: risk_score += 25
# # #     if data.temperature > 38: risk_score += 20
# # #     if data.error_counts > 3: risk_score += 35
# # #     if data.voltage_fluctuations.lower() == "yes": risk_score += 15
# # #     return min(risk_score, 100.0)

# # # @app.post("/predict")
# # # async def predict_failure(device_data: DeviceAttributes):
# # #     """
# # #     Receives device data and returns a predicted failure risk percentage.
# # #     """
# # #     try:
# # #         risk_percentage = get_dummy_prediction(device_data)
# # #         # The structure of this response can be changed later.
# # #         # The Express backend is designed to handle any valid JSON object.
# # #         return {
# # #             "failureRiskPercentage": risk_percentage,
# # #             "modelVersion": "1.0.0-dummy"
# # #         }
# # #     except Exception as e:
# # #         raise HTTPException(status_code=500, detail=str(e))

# # # # --- How to Run ---
# # # # 1. In a new terminal, navigate to the ml_service folder.
# # # # 2. Create and activate a virtual environment:
# # # #    python -m venv venv
# # # #    source venv/bin/activate  (or venv\Scripts\activate on Windows)
# # # # 3. Install dependencies: pip install -r requirements.txt
# # # # 4. Start the server: uvicorn main:app --reload --port 8000

# # # from fastapi import FastAPI, HTTPException
# # # from pydantic import BaseModel, Field
# # # import pandas as pd
# # # import joblib
# # # from typing import Literal
# # # import os

# # # # --- 1. SETUP & CONFIGURATION ---

# # # # Initialize the FastAPI application
# # # app = FastAPI(
# # #     title="Medical Device Failure Prediction API",
# # #     description="An API to predict medical device failure, providing a probability score and a maintenance recommendation.",
# # #     version="2.0.1"
# # # )

# # # # Define the path to the trained model.
# # # MODEL_PATH = os.path.join("models", "final_xgboost_model.pkl")
# # # MODEL_VERSION = "2.0.1" # Updated version

# # # # Load the trained model pipeline from the file using joblib
# # # try:
# # #     model = joblib.load(MODEL_PATH)
# # #     print("✅ Model loaded successfully.")
# # # except FileNotFoundError:
# # #     print(f"❌ Error: Model file not found. Make sure '{os.path.basename(MODEL_PATH)}' is in the '{os.path.dirname(MODEL_PATH)}/' directory.")
# # #     model = None
# # # except Exception as e:
# # #     print(f"❌ An unexpected error occurred while loading the model: {e}")
# # #     model = None


# # # # --- 2. DEFINE THE INPUT & OUTPUT DATA STRUCTURES ---

# # # class DeviceInputData(BaseModel):
# # #     """Defines the structure for input data from the user."""
# # #     device_type: Literal['CT_Scanner', 'Defibrillator', 'Infusion_Pump', 'Ventilator'] = Field(..., example="Ventilator")
# # #     temperature: float = Field(..., example=37.5)
# # #     vibration: float = Field(..., example=0.45)
# # #     power_consumption: float = Field(..., example=150.0)
# # #     lubrication: float = Field(..., example=2.5)
# # #     age_days: int = Field(..., gt=0, example=1825)

# # # class PredictionResponse(BaseModel):
# # #     """Defines the structure for the API's JSON response."""
# # #     prediction: int
# # #     modelVersion: str
# # #     failureRiskPercentage: float
# # #     maintenanceRecommendation: str


# # # # --- 3. RECOMMENDATION ENGINE LOGIC ---
# # # def get_maintenance_recommendation(data: DeviceInputData, probability: float) -> str:
# # #     """
# # #     Generates a maintenance recommendation based on model probability and input data.
# # #     """
# # #     risk_percentage = probability * 100

# # #     if risk_percentage < 50:
# # #         return "No immediate maintenance required. Continue with routine monitoring."

# # #     if risk_percentage >= 85:
# # #         recommendation = "CRITICAL ALERT: Immediate service is required. "
# # #     else: # 50 <= risk_percentage < 85
# # #         recommendation = "High Priority: Proactive maintenance is recommended. "

# # #     if data.temperature > 35 and data.device_type in ['CT_Scanner']:
# # #         recommendation += "Focus on checking the cooling system and ventilation."
# # #     elif data.vibration > 0.6 and data.device_type == 'Ventilator':
# # #         recommendation += "Inspect for mechanical imbalances and secure all mountings."
# # #     elif data.power_consumption > 180:
# # #         recommendation += "Investigate the power supply and internal electrical components for inefficiency."
# # #     elif data.age_days > 2500: # Over ~7 years
# # #         recommendation += "Consider a full diagnostic review due to advanced age."
# # #     else:
# # #         recommendation += "Perform a general inspection."

# # #     return recommendation


# # # # --- 4. CREATE THE PREDICTION ENDPOINT ---
# # # @app.post("/predict", response_model=PredictionResponse)
# # # def predict(data: DeviceInputData):
# # #     """
# # #     Receives device data, processes it, predicts failure probability,
# # #     and provides a maintenance recommendation.
# # #     """
# # #     if model is None:
# # #         raise HTTPException(
# # #             status_code=503, 
# # #             detail="Model is not available. Please contact the administrator."
# # #         )

# # #     try:
# # #         input_dict = data.dict()
        
# # #         # --- One-Hot Encoding Step ---
# # #         features = {
# # #             'temperature': [input_dict['temperature']],
# # #             'vibration': [input_dict['vibration']],
# # #             'power_consumption': [input_dict['power_consumption']],
# # #             'lubrication': [input_dict['lubrication']],
# # #             'age_days': [input_dict['age_days']],
# # #             'device_type_CT_Scanner': [0],
# # #             'device_type_Defibrillator': [0],
# # #             'device_type_Infusion_Pump': [0],
# # #             'device_type_Ventilator': [0]
# # #         }
        
# # #         device_type_column = f"device_type_{input_dict['device_type']}"
# # #         if device_type_column in features:
# # #             features[device_type_column][0] = 1

# # #         df_input = pd.DataFrame(features)

# # #         expected_columns_order = [
# # #             'temperature', 'vibration', 'power_consumption', 'lubrication', 
# # #             'age_days', 'device_type_CT_Scanner', 'device_type_Defibrillator', 
# # #             'device_type_Infusion_Pump', 'device_type_Ventilator'
# # #         ]
# # #         df_input = df_input[expected_columns_order]

# # #         # --- Prediction Step ---
# # #         prediction_result = model.predict(df_input)[0]
# # #         probability_of_failure = model.predict_proba(df_input)[0, 1]

# # #         # --- Recommendation Step ---
# # #         recommendation = get_maintenance_recommendation(data, probability_of_failure)

# # #         # --- Format and Return the Response ---
# # #         return {
# # #             "prediction": int(prediction_result),
# # #             "modelVersion": MODEL_VERSION,
# # #             "failureRiskPercentage": round(probability_of_failure * 100, 2),
# # #             "maintenanceRecommendation": recommendation
# # #         }

# # #     except Exception as e:
# # #         raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {e}")


# # # # A simple root endpoint to confirm the API is running
# # # @app.get("/")
# # # def read_root():
# # #     return {"status": "MedPredict ML Service is running."}

# # # from fastapi import FastAPI, HTTPException
# # # from pydantic import BaseModel, Field
# # # import pandas as pd
# # # import joblib
# # # from typing import Literal
# # # import os

# # # # --- 1. SETUP & CONFIGURATION ---

# # # # Initialize the FastAPI application
# # # app = FastAPI(
# # #     title="Medical Device Failure Prediction API",
# # #     description="An API to predict medical device failure, providing a probability score and a maintenance recommendation.",
# # #     version="2.0.2"
# # # )

# # # # Define the path to the trained model.
# # # MODEL_PATH = os.path.join("models", "final_xgboost_model.pkl")
# # # MODEL_VERSION = "2.0.2" # Updated version

# # # # Load the trained model pipeline from the file using joblib
# # # try:
# # #     model = joblib.load(MODEL_PATH)
# # #     print("✅ Model loaded successfully.")
# # # except FileNotFoundError:
# # #     print(f"❌ Error: Model file not found. Make sure '{os.path.basename(MODEL_PATH)}' is in the '{os.path.dirname(MODEL_PATH)}/' directory.")
# # #     model = None
# # # except Exception as e:
# # #     print(f"❌ An unexpected error occurred while loading the model: {e}")
# # #     model = None


# # # # --- 2. DEFINE THE INPUT & OUTPUT DATA STRUCTURES ---

# # # class DeviceInputData(BaseModel):
# # #     """Defines the structure for input data from the user, matching the model's features."""
# # #     device_type: Literal['X-Ray', 'MRI', 'Ventilator', 'Dialysis', 'Ultrasound'] = Field(..., example="X-Ray")
# # #     age_months: int = Field(..., gt=0, example=120)
# # #     usage_hours_per_day: float = Field(..., ge=0, example=8.5)
# # #     operational_hours: float = Field(..., ge=0, example=30000.0)
# # #     temperature_avg: float = Field(..., example=35.2)
# # #     humidity: float = Field(..., example=45.5)
# # #     vibration_level_avg: float = Field(..., ge=0, example=0.5)
# # #     voltage_fluctuation_pct: float = Field(..., ge=0, example=4.1)
# # #     last_repair_cost: float = Field(..., ge=0, example=450.0)
# # #     error_count_24h: int = Field(..., ge=0, example=3)

# # # class PredictionResponse(BaseModel):
# # #     """Defines the structure for the API's JSON response to match the backend's expectation."""
# # #     prediction: int
# # #     modelVersion: str
# # #     failureRiskPercentage: float
# # #     maintenanceRecommendation: str


# # # # --- 3. RECOMMENDATION ENGINE LOGIC ---
# # # def get_maintenance_recommendation(data: DeviceInputData, probability: float) -> str:
# # #     """
# # #     Generates a maintenance recommendation based on model probability and input data.
# # #     """
# # #     risk_percentage = probability * 100

# # #     if risk_percentage < 50:
# # #         return "No immediate maintenance required. Continue routine monitoring."

# # #     if risk_percentage >= 85:
# # #         recommendation = "CRITICAL ALERT: Immediate service required. "
# # #     else: # 50 <= risk_percentage < 85
# # #         recommendation = "High Priority: Proactive maintenance is recommended. "

# # #     # Add specific suggestions based on the input values
# # #     if data.temperature_avg > 30 and data.device_type in ['X-Ray', 'MRI']:
# # #         recommendation += "Focus on checking the cooling system and ventilation."
# # #     elif data.voltage_fluctuation_pct > 3.5 and data.device_type in ['X-Ray', 'MRI']:
# # #         recommendation += "Inspect the power supply and electrical connections."
# # #     elif data.vibration_level_avg > 0.6 and data.device_type == 'Ventilator':
# # #         recommendation += "Check for mechanical imbalances and secure mountings."
# # #     elif data.error_count_24h > 2:
# # #         recommendation += "Run a full diagnostic to identify the source of recent errors."
# # #     else:
# # #         recommendation += "Perform a general inspection based on high operational hours and device age."

# # #     return recommendation


# # # # --- 4. CREATE THE PREDICTION ENDPOINT ---
# # # @app.post("/predict", response_model=PredictionResponse)
# # # def predict(data: DeviceInputData):
# # #     """
# # #     Receives device data, engineers features, predicts failure probability,
# # #     and provides a maintenance recommendation.
# # #     """
# # #     if model is None:
# # #         raise HTTPException(
# # #             status_code=503, 
# # #             detail="Model is not available. Please contact the administrator."
# # #         )

# # #     try:
# # #         input_dict = data.dict()
        
# # #         # --- Feature Engineering Step ---
# # #         input_dict['error_x_age'] = input_dict['age_months'] * input_dict['error_count_24h']
        
# # #         # Convert to DataFrame
# # #         df_input = pd.DataFrame([input_dict])
        
# # #         # The model pipeline (loaded from the .pkl file) will handle the one-hot encoding internally.
# # #         # We just need to ensure the columns are in the right order before prediction.
        
# # #         # --- Prediction Step ---
# # #         prediction_result = model.predict(df_input)[0]
# # #         probability_of_failure = model.predict_proba(df_input)[0, 1]

# # #         # --- Recommendation Step ---
# # #         recommendation = get_maintenance_recommendation(data, probability_of_failure)

# # #         # --- Format and Return the Response ---
# # #         return {
# # #             "prediction": int(prediction_result),
# # #             "modelVersion": MODEL_VERSION,
# # #             "failureRiskPercentage": round(probability_of_failure * 100, 2),
# # #             "maintenanceRecommendation": recommendation
# # #         }

# # #     except Exception as e:
# # #         # This will catch any errors during prediction, e.g., if columns don't match
# # #         raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {str(e)}")


# # # # A simple root endpoint to confirm the API is running
# # # @app.get("/")
# # # def read_root():
# # #     return {"status": "MedPredict ML Service is running."}

# # from fastapi import FastAPI, HTTPException
# # from pydantic import BaseModel, Field
# # import pandas as pd
# # import joblib
# # from typing import Literal
# # import os

# # # --- 1. SETUP & CONFIGURATION ---

# # # Initialize the FastAPI application
# # app = FastAPI(
# #     title="Medical Device Failure Prediction API",
# #     description="An API to predict medical device failure, providing a probability score and a maintenance recommendation.",
# #     version="2.0.4"
# # )

# # # Define the path to the trained model.
# # MODEL_PATH = os.path.join("models", "final_xgboost_model.pkl")
# # MODEL_VERSION = "2.0.4" # Updated version

# # # Load the trained model pipeline from the file using joblib
# # try:
# #     model = joblib.load(MODEL_PATH)
# #     print("✅ Model loaded successfully.")
# # except FileNotFoundError:
# #     print(f"❌ Error: Model file not found. Make sure '{os.path.basename(MODEL_PATH)}' is in the '{os.path.dirname(MODEL_PATH)}/' directory.")
# #     model = None
# # except Exception as e:
# #     print(f"❌ An unexpected error occurred while loading the model: {e}")
# #     model = None


# # # --- 2. DEFINE THE INPUT & OUTPUT DATA STRUCTURES ---

# # class DeviceInputData(BaseModel):
# #     """Defines the structure for input data from the user, matching the model's features."""
# #     device_type: Literal['X-Ray', 'MRI', 'Ventilator', 'Dialysis', 'Ultrasound'] = Field(..., example="X-Ray")
# #     age_months: int = Field(..., gt=0, example=120)
# #     usage_hours_per_day: float = Field(..., ge=0, example=8.5)
# #     operational_hours: float = Field(..., ge=0, example=30000.0)
# #     temperature_avg: float = Field(..., example=35.2)
# #     humidity: float = Field(..., example=45.5)
# #     vibration_level_avg: float = Field(..., ge=0, example=0.5)
# #     voltage_fluctuation_pct: float = Field(..., ge=0, example=4.1)
# #     last_repair_cost: float = Field(..., ge=0, example=450.0)
# #     error_count_24h: int = Field(..., ge=0, example=3)

# # class PredictionResponse(BaseModel):
# #     """Defines the structure for the API's JSON response to match the backend's expectation."""
# #     prediction: str
# #     modelVersion: str
# #     failure_probability: float # Changed key as per user request
# #     maintenanceRecommendation: str


# # # --- 3. RECOMMENDATION ENGINE LOGIC ---
# # def get_maintenance_recommendation(data: DeviceInputData, probability: float) -> str:
# #     """
# #     Generates a maintenance recommendation based on model probability and input data.
# #     """
# #     risk_percentage = probability * 100

# #     if risk_percentage < 50:
# #         return "No immediate maintenance required. Continue routine monitoring."

# #     if risk_percentage >= 85:
# #         recommendation = "CRITICAL ALERT: Immediate service required. "
# #     else: # 50 <= risk_percentage < 85
# #         recommendation = "High Priority: Proactive maintenance is recommended. "

# #     # Add specific suggestions based on the input values
# #     if data.temperature_avg > 30 and data.device_type in ['X-Ray', 'MRI']:
# #         recommendation += "Focus on checking the cooling system and ventilation."
# #     elif data.voltage_fluctuation_pct > 3.5 and data.device_type in ['X-Ray', 'MRI']:
# #         recommendation += "Inspect the power supply and electrical connections."
# #     elif data.vibration_level_avg > 0.6 and data.device_type == 'Ventilator':
# #         recommendation += "Check for mechanical imbalances and secure mountings."
# #     elif data.error_count_24h > 2:
# #         recommendation += "Run a full diagnostic to identify the source of recent errors."
# #     else:
# #         recommendation += "Perform a general inspection based on high operational hours and device age."

# #     return recommendation


# # # --- 4. CREATE THE PREDICTION ENDPOINT ---
# # @app.post("/predict", response_model=PredictionResponse)
# # def predict(data: DeviceInputData):
# #     """
# #     Receives device data, engineers features, predicts failure probability,
# #     and provides a maintenance recommendation.
# #     """
# #     if model is None:
# #         raise HTTPException(
# #             status_code=503, 
# #             detail="Model is not available. Please contact the administrator."
# #         )

# #     try:
# #         input_dict = data.dict()
        
# #         # --- Feature Engineering Step ---
# #         input_dict['error_x_age'] = input_dict['age_months'] * input_dict['error_count_24h']
        
# #         # Convert to DataFrame
# #         df_input = pd.DataFrame([input_dict])
        
# #         # --- Prediction Step ---
# #         prediction_result = model.predict(df_input)[0]
# #         probability_of_failure = model.predict_proba(df_input)[0, 1]

# #         # Convert prediction to a human-readable status
# #         prediction_status = "Failed" if int(prediction_result) == 1 else "Not Failed"

# #         # --- Recommendation Step ---
# #         recommendation = get_maintenance_recommendation(data, probability_of_failure)

# #         # --- Format and Return the Response ---
# #         return {
# #             "prediction": prediction_status,
# #             "modelVersion": MODEL_VERSION,
# #             "failure_probability": round(probability_of_failure * 100, 2),
# #             "maintenanceRecommendation": recommendation
# #         }

# #     except Exception as e:
        
# #         raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {str(e)}")



# # @app.get("/")
# # def read_root():
# #     return {"status": "MedPredict ML Service is running."}

# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel, Field
# import pandas as pd
# import joblib
# from typing import Literal
# import os

# # --- 1. SETUP & CONFIGURATION ---
# app = FastAPI(
#     title="Medical Device Failure Prediction API",
#     description="An API to predict medical device failure, providing a probability score and a maintenance recommendation.",
#     version="2.0.5"  # Incremented version for the new logic
# )

# # Use a relative path that works within the `src/api` directory
# MODEL_PATH = os.path.join("..", "models", "final_xgboost_model.pkl")
# MODEL_VERSION = "2.0.5"

# try:
#     model = joblib.load(MODEL_PATH)
#     print("✅ Model loaded successfully.")
# except Exception as e:
#     print(f"❌ Error loading model: {e}")
#     model = None


# # --- 2. DEFINE THE INPUT DATA STRUCTURE (UPDATED) ---
# class DeviceInputData(BaseModel):
#     """
#     Defines the input data from the user.
#     `usage_hours_per_day` has been REMOVED as it will be calculated.
#     `last_repair_cost` has been REMOVED as the model was not trained on it.
#     """
#     device_type: Literal['X-Ray', 'MRI', 'Ventilator', 'Dialysis', 'Ultrasound'] = Field(..., example="X-Ray")
#     age_months: int = Field(..., gt=0, example=120)
#     operational_hours: float = Field(..., ge=0, example=30000.0)
#     temperature_avg: float = Field(..., example=35.2)
#     humidity: float = Field(..., example=45.5)
#     vibration_level_avg: float = Field(..., ge=0, example=0.5)
#     voltage_fluctuation_pct: float = Field(..., example=4.1)
#     error_count_24h: int = Field(..., ge=0, example=3)


# class PredictionResponse(BaseModel):
#     """Defines the structure for the API's JSON response."""
#     prediction: str
#     modelVersion: str
#     failure_probability: float
#     maintenanceRecommendation: str


# # --- 3. RECOMMENDATION ENGINE LOGIC ---
# def get_maintenance_recommendation(data: dict, probability: float) -> str:
#     """
#     Generates a maintenance recommendation based on model probability and input data.
#     """
#     risk_percentage = probability * 100
#     if risk_percentage < 50:
#         return "No immediate maintenance required. Continue routine monitoring."

#     recommendation = "High Priority: Proactive maintenance is recommended. "
#     if risk_percentage >= 85:
#         recommendation = "CRITICAL ALERT: Immediate service required. "

#     # Use .get() to safely access keys from the dictionary
#     if data.get('temperature_avg', 0) > 30 and data.get('device_type') in ['X-Ray', 'MRI']:
#         recommendation += "Focus on checking the cooling system and ventilation."
#     elif data.get('voltage_fluctuation_pct', 0) > 3.5 and data.get('device_type') in ['X-Ray', 'MRI']:
#         recommendation += "Inspect the power supply and electrical connections."
#     elif data.get('vibration_level_avg', 0) > 0.6 and data.get('device_type') == 'Ventilator':
#         recommendation += "Check for mechanical imbalances and secure mountings."
#     elif data.get('error_count_24h', 0) > 2:
#         recommendation += "Run a full diagnostic to identify the source of recent errors."
#     else:
#         recommendation += "Perform a general inspection based on high operational hours and device age."
#     return recommendation


# # --- 4. CREATE THE PREDICTION ENDPOINT (WITH FIXES) ---
# @app.post("/predict", response_model=PredictionResponse)
# def predict(data: DeviceInputData):
#     """
#     Receives device data, engineers features, predicts failure probability,
#     and provides a maintenance recommendation.
#     """
#     if model is None:
#         raise HTTPException(status_code=503, detail="Model is not available.")

#     try:
#         input_dict = data.dict()

#         # --- FEATURE ENGINEERING FIX ---
#         # 1. Calculate `usage_hours_per_day` based on your new formula.
#         if input_dict['age_months'] > 0:
#             input_dict['usage_hours_per_day'] = input_dict['operational_hours'] / (input_dict['age_months'] * 30)
#         else:
#             input_dict['usage_hours_per_day'] = 0  # Avoid division by zero

#         # 2. Calculate the other engineered feature the model needs.
#         input_dict['error_x_age'] = input_dict['age_months'] * input_dict['error_count_24h']

#         # --- X-RAY BUG FIX ---
#         # 3. Define the exact column order the model was trained on, based on your `train.py`.
#         model_features_order = [
#             'device_type', 'age_months', 'usage_hours_per_day', 'operational_hours',
#             'temperature_avg', 'humidity', 'vibration_level_avg',
#             'voltage_fluctuation_pct', 'error_count_24h', 'error_x_age'
#         ]

#         # 4. Create the DataFrame with the exact column order to ensure consistency.
#         df_input = pd.DataFrame([input_dict])[model_features_order]

#         # --- Prediction Step ---
#         prediction_result = model.predict(df_input)[0]
#         probability_of_failure = model.predict_proba(df_input)[0, 1]
#         prediction_status = "Failed" if int(prediction_result) == 1 else "Not Failed"

#         # --- Recommendation Step ---
#         recommendation = get_maintenance_recommendation(input_dict, probability_of_failure)

#         return {
#             "prediction": prediction_status,
#             "modelVersion": MODEL_VERSION,
#             "failure_probability": round(probability_of_failure * 100, 2),
#             "maintenanceRecommendation": recommendation
#         }

#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {str(e)}")


# @app.get("/")
# def read_root():
#     return {"status": "MedPredict ML Service is running."}
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import pandas as pd
import joblib
from typing import Literal
import os

# --- 1. SETUP & CONFIGURATION ---

# Initialize the FastAPI application
app = FastAPI(
    title="Medical Device Failure Prediction API",
    description="An API to predict medical device failure, providing a probability score and a maintenance recommendation.",
    version="2.0.5"
)

# Define the path to the trained model.
MODEL_PATH = os.path.join("models", "final_xgboost_model.pkl")
MODEL_VERSION = "2.0.5" # Updated version

# Load the trained model pipeline from the file using joblib
try:
    model = joblib.load(MODEL_PATH)
    print("✅ Model loaded successfully.")
except FileNotFoundError:
    print(f"❌ Error: Model file not found. Make sure '{os.path.basename(MODEL_PATH)}' is in the '{os.path.dirname(MODEL_PATH)}/' directory.")
    model = None
except Exception as e:
    print(f"❌ An unexpected error occurred while loading the model: {e}")
    model = None


# --- 2. DEFINE THE INPUT & OUTPUT DATA STRUCTURES ---

class DeviceInputData(BaseModel):
    """Defines the structure for input data from the user, matching the model's features."""
    device_type: Literal['X-Ray', 'MRI', 'Ventilator', 'Dialysis', 'Ultrasound'] = Field(..., example="X-Ray")
    age_months: int = Field(..., gt=0, example=120)
    operational_hours: float = Field(..., ge=0, example=30000.0)
    temperature_avg: float = Field(..., example=35.2)
    humidity: float = Field(..., example=45.5)
    vibration_level_avg: float = Field(..., ge=0, example=0.5)
    voltage_fluctuation_pct: float = Field(..., ge=0, example=4.1)
    last_repair_cost: float = Field(..., ge=0, example=450.0)
    error_count_24h: int = Field(..., ge=0, example=3)

class PredictionResponse(BaseModel):
    """Defines the structure for the API's JSON response to match the backend's expectation."""
    prediction: str
    modelVersion: str
    failure_probability: float # Changed key as per user request
    maintenanceRecommendation: str


# --- 3. RECOMMENDATION ENGINE LOGIC ---
def get_maintenance_recommendation(data: DeviceInputData, probability: float) -> str:
    """
    Generates a maintenance recommendation based on model probability and input data.
    """
    risk_percentage = probability * 100

    if risk_percentage < 50:
        return "No immediate maintenance required. Continue routine monitoring."

    if risk_percentage >= 85:
        recommendation = "CRITICAL ALERT: Immediate service required. "
    else: # 50 <= risk_percentage < 85
        recommendation = "High Priority: Proactive maintenance is recommended. "

    # Add specific suggestions based on the input values
    if data.temperature_avg > 30 and data.device_type in ['X-Ray', 'MRI']:
        recommendation += "Focus on checking the cooling system and ventilation."
    elif data.voltage_fluctuation_pct > 3.5 and data.device_type in ['X-Ray', 'MRI']:
        recommendation += "Inspect the power supply and electrical connections."
    elif data.vibration_level_avg > 0.6 and data.device_type == 'Ventilator':
        recommendation += "Check for mechanical imbalances and secure mountings."
    elif data.error_count_24h > 2:
        recommendation += "Run a full diagnostic to identify the source of recent errors."
    else:
        recommendation += "Perform a general inspection based on high operational hours and device age."

    return recommendation


# --- 4. CREATE THE PREDICTION ENDPOINT ---
@app.post("/predict", response_model=PredictionResponse)
def predict(data: DeviceInputData):
    """
    Receives device data, engineers features, predicts failure probability,
    and provides a maintenance recommendation.
    """
    if model is None:
        raise HTTPException(
            status_code=503,
            detail="Model is not available. Please contact the administrator."
        )

    try:
        input_dict = data.dict()

        if input_dict['age_months'] > 0:
            input_dict['usage_hours_per_day'] = input_dict['operational_hours'] / (input_dict['age_months'] * 30)
        else:
            input_dict['usage_hours_per_day'] = 0 

        # --- Feature Engineering Step ---
        input_dict['error_x_age'] = input_dict['age_months'] * input_dict['error_count_24h']

        # Convert to DataFrame
        df_input = pd.DataFrame([input_dict])

        # --- Prediction Step ---
        prediction_result = model.predict(df_input)[0]
        probability_of_failure = model.predict_proba(df_input)[0, 1]

        # Convert prediction to a human-readable status
        prediction_status = "Failed" if int(prediction_result) == 1 else "Not Failed"

        # --- Recommendation Step ---
        recommendation = get_maintenance_recommendation(data, probability_of_failure)

        # --- Format and Return the Response ---
        return {
            "prediction": prediction_status,
            "modelVersion": MODEL_VERSION,
            "failure_probability": round(probability_of_failure * 100, 2),
            "maintenanceRecommendation": recommendation
        }

    except Exception as e:

        raise HTTPException(status_code=500, detail=f"An error occurred during prediction: {str(e)}")



@app.get("/")
def read_root():
    return {"status": "MedPredict ML Service is running."}
