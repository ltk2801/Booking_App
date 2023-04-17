const express = require("express");

const router = express.Router();

const usersControler = require("../controllers/users");

const { verifyAdmin, verifyUser } = require("../utils/verifyToken.js");

//UPDATE
router.put("/:id", verifyUser, usersControler.updateUser);
//DELETE
router.delete("/:id", verifyUser, usersControler.deleteUser);
//GET
router.get("/:id", verifyUser, usersControler.getUser);
//GET ALL
router.get("/", verifyAdmin, usersControler.getAllUser);

module.exports = router;
