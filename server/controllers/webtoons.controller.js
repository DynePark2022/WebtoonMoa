const Webtoon = require("../models/webtoon.model");

const getWebtoon = async (req, res) => {
    try {
        const webtoons = await Webtoon.find();
        res.status(200).json(webtoons);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const postWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.create(req.body);
        res.status(201).json(webtoon);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.send("webtoon added!");
};

module.exports = { getWebtoon, postWebtoon };
