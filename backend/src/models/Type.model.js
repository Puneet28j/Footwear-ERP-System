import mongoose from "mongoose";

const typeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true, // chaahe to hata sakta hai
    },
  },
  { timestamps: true }
);

export const Type = mongoose.model("Type", typeSchema);
