const Webtoon = require("../models/webtoon.model");

const getWebtoon = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const toon = req.query.toon;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    // const results = {
    //     next: { page: Number, limit: Number },
    //     previous: { page: Number, limit: Number },
    //     data: [{...},{...}],
    // };
    if (endIndex < (await Webtoon.countDocuments().exec())) {
        results.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit,
        };
    }

    try {
        results.data = await Webtoon.find({ toon: toon })
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
        // res.send("webtoon added!");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = { getWebtoon, postWebtoon };
