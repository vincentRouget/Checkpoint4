const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

const { hashPassword, verifyPassword, verifyToken, userPermissionsById, } = require("../auth");

router.post("/signin", usersController.getUserToSignIn, verifyPassword);
// router.use(verifyToken);

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.post("/", hashPassword, usersController.postUser);
router.put("/:id",
  // userPermissionsById,
  usersController.updateUserById);
router.delete("/:id",
  // userPermissionsById,
  usersController.deleteUserById);

module.exports = router;