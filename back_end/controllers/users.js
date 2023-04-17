const User = require("../models/User");
const { createError } = require("../utils/error");

// Get Users
exports.getAllUser = async (req, res, next) => {
  try {
    // Tìm User theo params id
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
    // next(createError(401, "You are not authenticated !"));
  }
};

// Get User
exports.getUser = async (req, res, next) => {
  try {
    // Tìm User theo params id
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update User
exports.updateUser = async (req, res, next) => {
  try {
    // Tìm và update User theo params id, new : true trả về kết quả sau khi update luôn
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

// Delete User
exports.deleteUser = async (req, res, next) => {
  try {
    // Tìm và update User theo params id
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (error) {
    next(error);
  }
};
