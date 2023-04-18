const express = require("express");

const router = express.Router();

const roomsController = require("../controllers/rooms");

const { verifyAdmin } = require("../utils/verifyToken");

// CREATE

router.post("/:hotelId", verifyAdmin, roomsController.createRoom);

//UPDATE
router.put("/:id", verifyAdmin, roomsController.updateRoom);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, roomsController.deleteRoom);
//GET
router.get("/:id", roomsController.getRoom);
//GET ALL
router.get("/", roomsController.getAllRoom);

module.exports = router;
