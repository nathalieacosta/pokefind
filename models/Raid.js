import mongoose from "mongoose";

const RaidSchema = new mongoose.Schema({
  pokémon: {
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
}, {timestamps: true});

export default mongoose.models.Raid || mongoose.model("Raid", RaidSchema);
