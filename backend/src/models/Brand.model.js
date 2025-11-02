import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,           // brand must belong to a company
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// optional: 1 company ke andar same naam ka brand na ho
brandSchema.index({ company: 1, name: 1 }, { unique: true });

export const Brand = mongoose.model("Brand", brandSchema);
