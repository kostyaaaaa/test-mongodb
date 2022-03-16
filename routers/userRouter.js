const express = require("express");
const {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/userService");

const router = express.Router();

router.post("/", createNewUser);
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
