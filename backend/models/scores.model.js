const connection = require("../connection");

const getModelScores = async () => {
    const [result] = await
        connection
            .query("SELECT idscore, number_score, DATE_FORMAT(date, \"%d %M %Y\") AS date, average, user_iduser, pseudo FROM score LEFT JOIN user ON user_iduser = user.iduser ORDER BY number_score DESC;");
    return result;
};
const getModelScoreById = async (id) => {
    const [result] = await
        connection
            .query('SELECT idscore, number_score, DATE_FORMAT(date, \"%d %M %Y\") AS date, average, user_iduser FROM score WHERE user_iduser = ? ORDER BY number_score DESC;', [id]);
    return result;
};
const getModelBestScoreById = async (id) => {
    const [result] = await
        connection
            .query('SELECT MAX(number_score) AS Best FROM score WHERE user_iduser = ?', [id]);
    return result;
};
const postModelScoreById = async (number_score, date, average, user_iduser) => {
    const result = await
        connection
            .query("INSERT INTO score (number_score, date, average, user_iduser) VALUES (?,?,?,?)", [number_score, date, average, user_iduser]);
    return result;
};

module.exports = {
    getModelScores,
    getModelScoreById,
    getModelBestScoreById,
    postModelScoreById,
};