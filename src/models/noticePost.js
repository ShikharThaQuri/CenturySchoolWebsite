const mongoose = require("mongoose");

const noticePostSchema = new mongoose.Schema(
  {
    noticeTitle: {
      type: String,
      required: [true, "Must provide the Notice Title."],
    },
    disc: {
      type: String,
      required: [true, "Must provide the discription."],
    },
    type: {
      type: String,
      required: [true, "Must provide the Type of Notice."],
      enum: {
        values: ["Pin", "Normal"],
        message: "{VALUE} is not supported",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.notice || mongoose.model("notice", noticePostSchema);
