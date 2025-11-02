import mongoose from "mongoose";

const assignPersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const AssignPerson = mongoose.model(
  "AssignPerson",
  assignPersonSchema
);
