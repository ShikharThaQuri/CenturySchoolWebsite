const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.DB_STRING);
};

module.exports = connectDB;
