// import dotenv from "dotenv";
// dotenv.config({ path: "./.env" });
// import cors from "cors";
// import express from "express";
// import connectDB from "./config/db.js";
// import router from "./routes/userRoutes.js";
// import errorHandler from "./middleware/errorHandler.js";

// const app = express();
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Allow only the frontend URL
//     credentials: true, // Allow cookies if used
//   })
// );

// app.use(express.json());
// app.use(express.json());
// app.use("/", router);
// app.use(errorHandler);

// connectDB().catch((error) => {
//   console.log("DB connection calling failed", error);
// });
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`The Server is Running on PORT :${PORT} `);
// });

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import userAuthRouter from "./routes/userRoutes.js"; // This is your existing user router
import predictionRouter from "./routes/predictionRoutes.js"; // Import the new router
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// --- CORRECTED ROUTING ---
// Keep existing user auth routes at the root ("/") to avoid breaking the frontend
app.use("/", userAuthRouter);

// Add new prediction routes under the "/api" prefix for better organization
app.use("/api", predictionRouter);

app.use(errorHandler);

connectDB().catch((error) => {
  console.log("DB connection calling failed", error);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`The Server is Running on PORT: ${PORT}`);
});