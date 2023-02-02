const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.controller");

// const { hashPassword, verifyPassword, verifyToken, userPermissionsById, } = require("../auth");
// router.use(verifyToken);

router.get("/", scoresController.getScores);
router.get("/:id", scoresController.getScoreById);
router.get("/best/:id", scoresController.getBestScoreById);
router.post("/:id", scoresController.postScoreById);

module.exports = router;