const Webtoon = require("../model/webtoon.model");

const getWebtoon = async (req, res) => {
    try {
        const Webtoons = await Webtoon.find();
        console.log(Webtoons);
        res.status(200).json(Webtoons);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createWebtoon = async (req, res) => {
    try {
        const newWebtoon = new Webtoon(req.body);
        await newWebtoon.save();
        res.status(201).json(newWebtoon);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.send("webtoon added!");
};

module.exports = { getWebtoon, createWebtoon };
