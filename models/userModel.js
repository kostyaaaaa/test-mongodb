const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  photos: [{ type: Schema.Types.ObjectId, ref: "Photo" }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
