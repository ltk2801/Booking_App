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

// Get hotels by type
exports.countByType = async (req, res, next) => {
  try {
    const khachsanCount = await Hotel.countDocuments({ type: "Khách sạn" });
    const canhoCount = await Hotel.countDocuments({ type: "Căn hộ" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const villaCount = await Hotel.countDocuments({ type: "Biệt thự" });
    const nhanghithondaCount = await Hotel.countDocuments({
      type: "Nhà nghỉ thôn dã",
    });
    const nhanghimatCount = await Hotel.countDocuments({
      type: "Nhà nghỉ mát",
    });

    res.status(200).json([
      {
        type: "Khách sạn",
        count: khachsanCount,
      },
      {
        type: "Căn hộ",
        count: canhoCount,
      },
      {
        type: "Resort",
        count: resortCount,
      },
      {
        type: "Biệt thự",
        count: villaCount,
      },
      {
        type: "Nhà nghỉ thôn dã",
        count: nhanghithondaCount,
      },
      {
        type: "Nhà nghỉ mát",
        count: nhanghimatCount,
      },
    ]);
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
