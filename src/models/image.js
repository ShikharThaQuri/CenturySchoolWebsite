import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    imageDis: {
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
      required: [true, "Must provide the category of the image."],
      enum: {
        values: [
          "Special Events",
          "Friday Games",
          "School Boundary",
          "School Family",
        ],
        message: "{VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.images || mongoose.model("images", imageSchema);
