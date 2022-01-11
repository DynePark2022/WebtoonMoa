const Post = require("../models/post.model");

const url = process.env.URL;

const getPosts = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const category = req.query.category;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    // FIXME: change to better code

    if (category === "null") {
        const total = await Post.countDocuments().exec();
        if (endIndex < total) {
            results.meta = { nextPage: page + 1, limit, total };
        } else if (startIndex > 0) {
            results.meta = { previousPage: page - 1, limit, total };
        } else {
            results.meta = { limit, total };
        }
    } else {
        const total = await Post.countDocuments({ category }).exec();
        if (endIndex < total) {
            results.meta = { nextPage: page + 1, limit, total };
        } else if (startIndex > 0) {
            results.meta = { previousPage: page - 1, limit, total };
        } else {
            results.meta = { limit, total };
        }
    }
    try {
        if (category === "null") {
            results.data = await Post.find()
                .limit(limit)
                .sort({ createdAt: -1 })
                .skip(startIndex)
                .exec();
            res.setHeader("Content-Security-Policy", `script-src ${url}`);
            res.status(200).json(results);
        } else {
            results.data = await Post.find({ category })
                .limit(limit)
                .sort({ createdAt: -1 })
                .skip(startIndex)
                .exec();
            res.setHeader("Content-Security-Policy", `script-src ${url}`);
            res.status(200).json(results);
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getSinglePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.find({ _id: postId });
        res.setHeader("Content-Security-Policy", `script-src ${url}`);
        res.status(200).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const postPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        if (
            req.body.post.title.length === 0 ||
            req.body.post.content.length === 0
        ) {
            res.status(411).json({ message: error._message });
        } else {
            res.status(409).json({ message: error._message });
        }
    }
};

const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        await Post.findOneAndDelete({ _id: id });
        res.status(204).send("post deleted!");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getPosts,
    getSinglePost,
    postPost,
    deletePost,
};
