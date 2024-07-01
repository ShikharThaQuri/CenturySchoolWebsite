import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "You have to provide User Name."],
    },
    hash: {
      type: String,
      require: true,
    },
    salt: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.user || mongoose.model("user", userSchema);
