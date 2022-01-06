const Comment = require("../models/comment.model");

const getComments = async (req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Comment.find({ postId: postId, parentId: null });
        res.status(200).json(comments);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const getNestedComments = async (req, res) => {
    const parentId = req.params.id;
    try {
        const nestedComments = await Comment.find({ parentId: parentId });
        res.status(200).json(nestedComments);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const postComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        if (req.body.comment.length === 0) {
            res.status(411).json({ message: error._message });
        } else {
            res.status(409).json({ message: error._message });
        }
    }
};

const deleteComment = async (req, res) => {
    const id = req.params.id;
    try {
        await Comment.findOneAndDelete({ _id: id });
        res.status(204).send("post deleted!");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getComments,
    postComment,
    deleteComment,
    getNestedComments,
};
