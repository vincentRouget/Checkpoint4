const usersModel = require("../models/users.model");

const getUsers = async (req, res) => {
  const users = await usersModel.getModelUsers();
  res.status(200).send(users);
};
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await usersModel.getModelUserById(id);
  res.status(200).send(user);
};
const postUser = async (req, res) => {
  const { pseudo, password } = req.body;
  const users = await usersModel.postModelUser(pseudo, password);
  res.status(201).send("User created");
};
const updateUserById = async (req, res) => {
  const { pseudo, password } = req.body;
  const id = parseInt(req.params.id);
  const user = await usersModel.updateModelUserById(pseudo, password, id);
  res.status(200).send("User modified");
};
const deleteUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await usersModel.deleteModelUserById(id);
  res.status(200).send("User deleted");
};
const getUserToSignIn = async (req, res, next) => {
  const { pseudo } = req.body;
  const user = await usersModel.getModelUserToSignIn(pseudo);
  if (user[0] != null) {
    req.user = user[0];
    next();
  } else {
    res.status(200).send("User not found");
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUserById,
  deleteUserById,
  getUserToSignIn,
};
