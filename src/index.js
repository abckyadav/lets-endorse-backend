const express = require("express");
const connectDB = require("./configs/db");
require("dotenv").config();
const userController = require("./controllers/user.controller");
const PORT = process.env.PORT || 2345;

const app = express();
app.use(express.json());

app.use("/", userController);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Connected to port ${PORT}`);
  } catch (err) {
    console.log("err:", err);
  }
});
