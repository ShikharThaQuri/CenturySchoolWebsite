import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    writerName: {
      type: String,
      require: true,
    },
    heading: {
      type: String,
    },
    dis: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      enum: {
        values: ["story", "poem", "educational"],
        message: "{VALUE} is not supported",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.blogs || mongoose.model("blogs", blogSchema);
