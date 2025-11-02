import mongoose from "mongoose";

export const connectDb = async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/footwear_erp";
  try {
    await mongoose.connect(uri, {
      dbName: "footwear_erp",
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Mongo error:", err.message);
    process.exit(1);
  }
};
