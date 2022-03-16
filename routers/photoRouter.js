const express = require("express");
const { getUsersPhoto, uploadPhoto } = require("../services/photoService");

const router = express.Router();

router.get("/", getUsersPhoto);
router.post("/", uploadPhoto);

module.exports = router;
