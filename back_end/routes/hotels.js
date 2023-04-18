const express = require("express");

const router = express.Router();

const hotelsController = require("../controllers/hotels");

const { verifyAdmin } = require("../utils/verifyToken");

// CREATE

router.post("/", verifyAdmin, hotelsController.postHotel);

//UPDATE
router.put("/:id", verifyAdmin, hotelsController.updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, hotelsController.deleteHotel);
//GET
router.get("/find/:id", hotelsController.getHotel);

//GET ALL
router.get("/", hotelsController.getAllHotel);
router.get("/countByCity", hotelsController.countByCity);
router.get("/countByType", hotelsController.getAllHotel);

module.exports = router;
