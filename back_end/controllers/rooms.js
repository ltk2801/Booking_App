const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

// Get rooms
exports.getAllRoom = async (req, res, next) => {
  try {
    // Tìm room theo params id
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
    // next(createError(401, "You are not authenticated !"));
  }
};

// Get room
exports.getRoom = async (req, res, next) => {
  try {
    // Tìm room theo params id
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// Update room
exports.updateRoom = async (req, res, next) => {
  try {
    // Tìm và update room theo params id
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};
// Update roomAvailability
exports.updateRoomAvailability = async (req, res, next) => {
  try {
    // Update updateRoomAvailability của roomNumber trong room
    await Room.updateOne({"roomNumber._id" : req.params.id}, {
      $push: {
        "roomNumber.$.unavailableDates": req.body.dates
      }
    })
    res.status(200).json("Room status has been updated.");
  } catch (error) {
    next(error);
  }
};

// Delete room
exports.deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  try {
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    // Tìm và update hotel theo params id
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted.");
  } catch (error) {
    next(error);
  }
};
