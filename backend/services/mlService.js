import axios from 'axios';

/**
 * Communicates with the external FastAPI ML service.
 * @param {object} deviceData The input data from the prediction form.
 * @returns {Promise<object>} The prediction result from the ML service.
 */
export const getFailurePrediction = async (deviceData) => {
    const mlApiUrl = process.env.ML_API_URL;
    if (!mlApiUrl) {
        throw new Error("ML service URL is not configured.");
    }

    try {
        const response = await axios.post(`${mlApiUrl}/predict`, deviceData);
        return response.data;
    } catch (error) {
        console.error("Error calling ML service:", error.message);
        throw new Error("The prediction service is currently unavailable.");
    }
};