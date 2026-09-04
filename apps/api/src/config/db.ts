import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/slipstream";
  try {
    await mongoose.connect(mongoURI);
    console.log(`[MongoDB] Successfully connected to ${mongoURI}`);
  } catch (error) {
    console.error("[MongoDB] Connection error:", error);
    // Don't terminate hard in dev, allow fallback handling
  }
};
