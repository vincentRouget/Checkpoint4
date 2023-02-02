const scoresModel = require("../models/scores.model");

const getScores = async (req, res) => {
    const scores = await scoresModel.getModelScores();
    res.status(200).send(scores);
};
const getScoreById = async (req, res) => {
    const id = parseInt(req.params.id);
    const score = await scoresModel.getModelScoreById(id);
    res.status(200).send(score);
};
const getBestScoreById = async (req, res) => {
    const id = parseInt(req.params.id);
    const score = await scoresModel.getModelBestScoreById(id);
    res.status(200).send(score);
};
const postScoreById = async (req, res) => {
    const user_iduser = parseInt(req.params.id);
    const { number_score, date, average } = req.body;
    const scores = await scoresModel.postModelScoreById(number_score, date, average, user_iduser);
    res.status(201).send("Saved");
};

module.exports = {
    getScores,
    getScoreById,
    getBestScoreById,
    postScoreById,
};