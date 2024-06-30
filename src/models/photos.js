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
    category: {
      type: String,
      required: [true, "Must provide the category of the photo."],
      enum: {
        values: ["Special Events", "Friday Games", "School Boundory"],
        message: "{VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.photos || mongoose.model("photos", photoSchema);
