const connection = require("../connection");

const getModelUsers = async () => {
  const [result] = await
    connection
      .query("SELECT * FROM user;");
  return result;
};
const getModelUserById = async (id) => {
  const [result] = await
    connection
      .query('SELECT * FROM user WHERE idUser = ?', [id]);
  return result;
};
const postModelUser = async (pseudo, password) => {
  const result = await
    connection
      .query("INSERT INTO user (pseudo, password) VALUES (?,?)", [pseudo, password]);
  return result;
};
const updateModelUserById = async (pseudo, email, password, image_user, id) => {
  const [result] = await
    connection
      .query("UPDATE user SET pseudo = ?, password = ? WHERE idUser = ?", [pseudo, password, id]);
  return result;
};
const deleteModelUserById = async (id) => {
  const [result] = await
    connection
      .query("DELETE FROM user WHERE idUser = ?", [id]);
  return result;
};
const getModelUserToSignIn = async (email) => {
  const [result] = await
    connection
      .query("SELECT * FROM user WHERE email = ?", [pseudo]);
  return result;
};

module.exports = {
  getModelUsers,
  getModelUserById,
  postModelUser,
  updateModelUserById,
  deleteModelUserById,
  getModelUserToSignIn,
};