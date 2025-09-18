import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // Storing inputData as a flexible object to accommodate future changes.
    inputData: { type: mongoose.Schema.Types.Mixed, required: true },
    // Storing the result as a flexible object as well.
    predictionResult: { type: mongoose.Schema.Types.Mixed, required: true },
    modelVersion: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Prediction", predictionSchema);