const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const roomsRoute = require("./routes/rooms");
const hotelsRoute = require("./routes/hotels");
const usersRoute = require("./routes/users");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use("/api/v1/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Kết nối db
mongoose
  .connect(process.env.MONGO)
  .then((result) => {
    app.listen(8800);
    console.log("Connect Successfully");
  })
  .catch((err) => console.log(err));
