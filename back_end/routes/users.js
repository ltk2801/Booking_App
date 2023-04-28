const express = require("express");

const router = express.Router();

const usersControler = require("../controllers/users");

const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

//UPDATE
router.put("/:id", usersControler.updateUser);
//DELETE
router.delete("/:id", usersControler.deleteUser);
//GET
router.get("/:id", usersControler.getUser);
//GET ALL
router.get("/", usersControler.getAllUser);

module.exports = router;
