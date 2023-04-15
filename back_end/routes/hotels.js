const express = require("express");

const router = express.Router();

const hotelsController = require("../controllers/hotels");

// CREATE

router.post("/", hotelsController.postHotel);

//UPDATE
router.put("/:id", hotelsController.updateHotel);
//DELETE
router.delete("/:id", hotelsController.deleteHotel);
//GET
router.get("/:id", hotelsController.getHotel);
//GET ALL
router.get("/", hotelsController.getAllHotel);

module.exports = router;
