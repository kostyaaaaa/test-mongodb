const Photos = require("../models/photoModel");

const uploadPhoto = async (req, res) => {
  try {
    const { url, extension, id } = req.body;
    const photo = new Photos({
      owner: id,
      extension,
      url,
    });
    await photo.save();
    res.send(photo);
  } catch (err) {
    console.log(err);
  }
};

const getUsersPhoto = async (req, res) => {
  try {
    const photos = await Photos.find().populate({
      path: "owner",
      select: ["firstName", "lastName"],
    });
    res.send(photos);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUsersPhoto,
  uploadPhoto,
};
