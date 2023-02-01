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
      .query('SELECT firstname, lastname, email, password, image_user FROM user WHERE idUser = ?', [id]);
  return result;
};
const postModelUser = async (firstname, lastname, email, password, image_user) => {
  const result = await
    connection
      .query("INSERT INTO user (firstname, lastname, email, password, image_user) VALUES (?,?,?,?,?)", [firstname, lastname, email, password, image_user]);
  return result;
};
const updateModelUserById = async (firstname, lastname, email, password, image_user, id) => {
  const [result] = await
    connection
      .query("UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ?, image_user =? WHERE idUser = ?", [firstname, lastname, email, password, image_user, id]);
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
      .query("SELECT * FROM user WHERE email = ?", [email]);
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