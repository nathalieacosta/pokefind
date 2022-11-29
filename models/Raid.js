import mongoose from "mongoose";

const RaidSchema = new mongoose.Schema(
  {
    pokemon: {
      type: String,
      required: true,
    },
    teraType: {
      type: String,
      required: true,
    },
    stars: {
      type: String,
      required: true,
    },
    linkCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

RaidSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 });

export default mongoose.models.Raid || mongoose.model("Raid", RaidSchema);
