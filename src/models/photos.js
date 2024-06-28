import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    photoDis: {
      type: String,
      require: true,
    },
    image_Url: {
      type: String,
      require: true,
    },
    public_id: {
      type: String,
      require: true,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.photos || mongoose.model("photos", photoSchema);
