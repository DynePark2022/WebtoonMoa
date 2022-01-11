const Webtoon = require("../models/webtoon.model");

const getWebtoons = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const category = req.query.category;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    const total = await Webtoon.countDocuments({ toon: category }).exec();
    if (endIndex < total) {
        results.meta = { nextPage: page + 1, limit, total };
    } else if (startIndex > 0) {
        results.meta = { previousPage: page - 1, limit, total };
    } else {
        results.meta = { limit, total };
    }

    try {
        results.data = await Webtoon.find({ toon: category })
            .limit(limit)
            .skip(startIndex)
            .exec();
        res.status(200).json(results);
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
};

const getSingleWebtoon = async (req, res) => {
    const id = req.params.id;
    try {
        const webtoon = await Webtoon.findOne({ _id: id });
        res.status(200).json(webtoon);
    } catch (error) {
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
        res.status(200).json(webtoon);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getBookmarked = async (req, res) => {
    const ids = req.query.ids.split(",");
    try {
        const webtoons = await Webtoon.find({ _id: { $in: ids } });
        res.status(200).json(webtoons);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
module.exports = {
    getWebtoons,
    postWebtoon,
    getSingleWebtoon,
    searchWebtoon,
    getBookmarked,
};
