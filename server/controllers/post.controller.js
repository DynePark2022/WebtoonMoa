const Post = require("../models/post.model");

const url = process.env.URL;

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.setHeader("Content-Security-Policy", `script-src ${url}`);
        res.status(200).json(posts);
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
        console.log(req.body);
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
