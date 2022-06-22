const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB);
};

module.exports = connectDB;
