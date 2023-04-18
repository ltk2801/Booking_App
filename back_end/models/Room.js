const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tạo 1 bảng mới là bảng posts
const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    roomNumber: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
