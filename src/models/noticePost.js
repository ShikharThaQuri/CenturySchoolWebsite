const mongoose = require("mongoose");

const noticePostSchema = new mongoose.Schema({
  noticeTitle: {
    type: String,
    required: [true, "Must provide the Notice Title."],
  },
  disc: {
    type: String,
    required: [true, "Must provide the discription."],
  },
  color: {
    type: String,
    required: [true, "Must provide the Color."],
    enum: {
      values: ["red", "green"],
      message: "{VALUE} is not supported",
    },
  },
  type: {
    type: String,
    required: [true, "Must provide the Type of Notice."],
    enum: {
      values: ["Parmanent", "Temporori"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports =
  mongoose.models.notice || mongoose.model("notice", noticePostSchema);
