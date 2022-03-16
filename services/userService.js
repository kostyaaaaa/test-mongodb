const Users = require("../models/userModel");

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, age, gender } = req.body;
    const user = new Users({ firstName, lastName, age, gender, photos: [] });
    await user.save();
    res.send("success");
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const newUserData = req.body;
    const user = await Users.findOneAndUpdate({ _id: id }, newUserData, {
      new: true,
      useFindAndModify: false,
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOneAndDelete({ _id: id });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
