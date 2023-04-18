const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");

// Get Hotels
exports.getAllHotel = async (req, res, next) => {
  try {
    // Tìm hotel theo params id
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
    // next(createError(401, "You are not authenticated !"));
  }
};

// Get hotels by city
exports.countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(error);
    // next(createError(401, "You are not authenticated !"));
  }
};

// Get hotel
exports.getHotel = async (req, res, next) => {
  try {
    // Tìm hotel theo params id
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// Post hotel
exports.postHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// Update hotel
exports.updateHotel = async (req, res, next) => {
  try {
    // Tìm và update hotel theo params id
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

// Delete hotel
exports.deleteHotel = async (req, res, next) => {
  try {
    // Tìm và update hotel theo params id
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};
