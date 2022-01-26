const Webtoon = require("../models/webtoon.model");
const log = require("../config/logger");

const getWebtoons = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const category = req.query.category;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    const total = await Webtoon.countDocuments({ category }).exec();
    results.meta = setMeta();

    function setMeta() {
        if (endIndex < total) return { nextPage: page + 1, limit, total };
        if (startIndex > 0) return { previousPage: page - 1, limit, total };
        return { limit, total };
    }

    try {
        results.data = await Webtoon.find({ category })
            .limit(limit)
            .skip(startIndex)
            .exec();
        log.info(`GET / 200 get webtoons.`);
        res.status(200).json(results);
    } catch (error) {
        log.error(`GET / 404 get webtoons. ${error.message}`);
        res.status(404).json({ message: error.message });
    }
};

const getWebtoonsUpdated = async (req, res) => {
    const limit = 8;
    try {
        results = await Webtoon.find({})
            .sort({ updated: -1 })
            .limit(limit)
            .exec();
        log.info(`GET / 200 get updated webtoons.`);
        res.status(200).json(results);
    } catch (error) {
        log.error(`GET / 404 get updated webtoons. ${error.message}`);
        res.status(404).json({ message: error.message });
    }
};

const getWebtoonsRecommended = async (req, res) => {
    const genre = req.query.genre;
    const limit = 8;
    try {
        const count = await Webtoon.countDocuments({ genre });
        const random = Math.floor(Math.random() * count);
        const results = await Webtoon.find({ genre }).skip(random).limit(limit);
        log.info(`GET / 200 get recommended webtoons.`);
        res.status(200).json(results);
    } catch (error) {
        log.error(`GET / 404 get recommended webtoons. ${error.message}`);
        res.status(404).json({ message: error.message });
    }
};

const getWebtoonsFiltered = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    let { category, platform, days, genre, age, consonant } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const query = { ...{ category, platform, days, genre, age, consonant } };
    Object.keys(query).forEach(
        (key) => query[key] === "전체" && delete query[key]
    );

    const total = await Webtoon.countDocuments(query);
    results.meta = setMeta();

    function setMeta() {
        if (endIndex < total) return { nextPage: page + 1, limit, total };
        if (startIndex > 0) return { previousPage: page - 1, limit, total };
        return { limit, total };
    }

    try {
        results.data = await Webtoon.find(query)
            .limit(limit)
            .skip(startIndex)
            .exec();
        log.info(`GET / 200 get filtered webtoons.`);
        res.status(200).json(results);
    } catch (error) {
        log.error(`GET / 404 get filtered webtoons. ${error.message}`);
        res.status(404).json({ message: error.message });
    }
};

const postWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.create(req.body);
        log.info(`POST / 201 post webtoons`);
        res.status(201).json(webtoon);
    } catch (error) {
        log.error(`POST / 409 post webtoons. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const getSingleWebtoon = async (req, res) => {
    const id = req.params.id;
    try {
        const webtoon = await Webtoon.findOne({ _id: id });
        log.info(`GET / 200 get single webtoon.`);
        res.status(200).json(webtoon);
    } catch (error) {
        log.error(`GET / 404 get single webtoon. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const searchWebtoon = async (req, res) => {
    const search_text = req.params.name;
    const regex = new RegExp(search_text, "i");
    const query = {
        $or: [{ title: regex }, { author: regex }],
    };
    try {
        const webtoon = await Webtoon.find(query);
        log.info(`GET / 200 search webtoon. search_text:${search_text}`);
        res.status(200).json(webtoon);
    } catch (error) {
        log.error(
            `GET / 409 search webtoon. search_text:${search_text} ${error.message}`
        );
        res.status(409).json({ message: error.message });
    }
};

const getBookmarked = async (req, res) => {
    const ids = req.query.ids.split(",");
    try {
        const webtoons = await Webtoon.find({ _id: { $in: ids } });
        log.info(`GET / 200 get bookmarked webtoon.`);
        res.status(200).json(webtoons);
    } catch (error) {
        log.error(`GET / 409 get bookmarked webtoon. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};
module.exports = {
    getWebtoons,
    getWebtoonsUpdated,
    getWebtoonsRecommended,
    getWebtoonsFiltered,
    postWebtoon,
    getSingleWebtoon,
    searchWebtoon,
    getBookmarked,
};
