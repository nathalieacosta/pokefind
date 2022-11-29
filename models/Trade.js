import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    contact: {
        type: String,
    },
  },
  { timestamps: true }
);

TradeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 });

export default mongoose.models.Trade || mongoose.model("Trade", TradeSchema);
