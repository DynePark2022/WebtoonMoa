const Post = require("../models/post.model");
const log = require("../config/logger");

const url = process.env.URL;

const getPosts = async (req, res) => {
    const page = Math.min(parseInt(req.query.page), 1);
    const limit = parseInt(req.query.limit);
    const category = req.query.category;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    // setMeta
    async function setMeta() {
        const total = await Post.countDocuments({ category }).exec();
        if (endIndex < total) {
            return (results.meta = { nextPage: page + 1, limit, total });
        }
        if (startIndex > 0) {
            return (results.meta = { previousPage: page - 1, limit, total });
        }
        results.meta = { limit, total };
    }

    async function setMetaForNull() {
        const total = await Post.countDocuments().exec();
        if (endIndex < total) {
            return (results.meta = { nextPage: page + 1, limit, total });
        }
        if (startIndex > 0) {
            return (results.meta = { previousPage: page - 1, limit, total });
        }
        results.meta = { limit, total };
    }

    // findPosts
    async function findPosts() {
        results.data = await Post.find({ category })
            .limit(limit)
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .exec();
        res.setHeader("Content-Security-Policy", `script-src ${url}`);
        log.info(`GET / 200 get posts`);
        res.status(200).json(results);
    }

    async function findPostsForNull() {
        results.data = await Post.find()
            .limit(limit)
            .sort({ createdAt: -1 })
            .skip(startIndex)
            .exec();
        res.setHeader("Content-Security-Policy", `script-src ${url}`);
        log.info(`GET / 200 get posts for null query`);
        res.status(200).json(results);
    }

    try {
        if (category === "null") {
            findPostsForNull();
            setMetaForNull();
        } else {
            findPosts();
            setMeta();
        }
    } catch (error) {
        log.error(`GET / 409 get posts. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const getSinglePost = async (req, res) => {
    const postId = req.params.id;
    try {
        await Post.increaseView({ _id: postId });
        const post = await Post.find({ _id: postId });
        res.setHeader("Content-Security-Policy", `script-src ${url}`);
        log.info(`GET / 200 get single post`);
        res.status(200).json(post);
    } catch (error) {
        log.error(`GET / 409 get post. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const postPost = async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    if (title === "" || content === "") {
        log.info(`POST / 411 create post. ${title}`);
        res.status(411).json({ message: "need content" });
    } else {
        try {
            const post = await Post.create(req.body);
            log.info(`POST / 201 create post ${title}`);
            res.status(201).json(post);
        } catch (error) {
            log.error(`POST / 409 create post ${error.message}`);
            res.status(409).json({ message: error.message });
        }
    }
};

const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        await Post.findOneAndDelete({ _id: id });
        log.info(`DELETE / 204 delete post. postId: ${id}`);
        res.status(204).send("post deleted!");
    } catch (error) {
        log.error(`DELETE / 409 delete post. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const likePost = async (req, res) => {
    const _id = req.body.post_id;
    const user_id = res.locals.user._id;
    const update = { $push: { thumbUp: user_id } };
    const options = { new: true };
    if (res.locals.user === null) {
        log.info(`PATCH / 403 like post. postId: ${id}`);
        res.status(403).json({ message: error.message });
    } else {
        try {
            const result = await Post.findOneAndUpdate(
                { _id },
                update,
                options
            );
            log.info(`PATCH / 201 like post. postId: ${id}`);
            res.status(201).json(result);
        } catch (error) {
            log.error(`PATCH / 409 like post. ${error.message}`);
            res.status(409).json({ message: error.message });
        }
    }
};

module.exports = {
    getPosts,
    getSinglePost,
    postPost,
    deletePost,
    likePost,
};
