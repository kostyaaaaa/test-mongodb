const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PhotoSchema = new Schema({
  extension: String,
  url: String,
  owner: { ref: "User", type: Schema.Types.ObjectId },
});

const PhotoModel = model("Photo", PhotoSchema);

module.exports = PhotoModel;
