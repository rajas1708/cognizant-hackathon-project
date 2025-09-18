// import Prediction from '../models/Prediction.model.js';
// import { getFailurePrediction } from '../services/mlService.js';
// import { ApiError, ApiResponse } from '../utils/api.js';

// export const createPrediction = async (req, res, next) => {
//     const { deviceData } = req.body;

//     if (!deviceData || Object.keys(deviceData).length === 0) {
//         return next(new ApiError(400, "Device data is required."));
//     }

//     try {
//         const result = await getFailurePrediction(deviceData);

//         const newPrediction = new Prediction({
//             // userId: req.user?._id, // Add this if you implement authentication on this route
//             inputData: deviceData,
//             predictionResult: result,
//             modelVersion: result.modelVersion || 'unknown'
//         });

//         await newPrediction.save();

//         res.status(201).json(new ApiResponse(201, newPrediction, "Prediction successful."));
//     } catch (error) {
//         return next(new ApiError(502, error.message)); // 502 Bad Gateway
//     }
// };

import Prediction from '../models/Prediction.model.js';
import { getFailurePrediction } from '../services/mlService.js';
import { ApiError, ApiResponse } from '../utils/api.js';

export const createPrediction = async (req, res, next) => {
    const { deviceData } = req.body;

    if (!deviceData || Object.keys(deviceData).length === 0) {
        return next(new ApiError(400, "Device data is required."));
    }

    try {
        const result = await getFailurePrediction(deviceData);

        const newPrediction = new Prediction({
            inputData: deviceData,
            predictionResult: result,
            modelVersion: result.modelVersion || 'unknown'
        });

        await newPrediction.save();

        res.status(201).json(new ApiResponse(201, newPrediction, "Prediction successful."));
    } catch (error) {
        return next(new ApiError(502, error.message));
    }
};

export const getLatestPrediction = async (req, res, next) => {
  try {
    const latestPrediction = await Prediction.findOne().sort({ createdAt: -1 });
    if (!latestPrediction) {
      return next(new ApiError(404, "No predictions found."));
    }
    res.status(200).json(new ApiResponse(200, latestPrediction, "Latest prediction fetched successfully."));
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

export const getAllPredictions = async (req, res, next) => {
    try {
        const predictions = await Prediction.find().sort({ createdAt: -1 });
        if (!predictions) {
            return next(new ApiError(404, "No predictions found."));
        }
        res.status(200).json(new ApiResponse(200, predictions, "All predictions fetched successfully."));
    } catch (error) {
        return next(new ApiError(500, error.message));
    }
};

export const getPredictionByDeviceId = async (req, res, next) => {
    try {
        const { deviceId } = req.params;
        const prediction = await Prediction.findOne({ "inputData.device_id": deviceId }).sort({ createdAt: -1 });
        if (!prediction) {
            return next(new ApiError(404, "No prediction found for this device ID."));
        }
        res.status(200).json(new ApiResponse(200, prediction, "Prediction fetched successfully by device ID."));
    } catch (error) {
        return next(new ApiError(500, error.message));
    }
};