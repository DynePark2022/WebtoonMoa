const Comment = require("../models/comment.model");

const getComments = async (req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Comment.find({ postId: postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const postComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
        // res.send("comment added!");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const updateComment = async (req, res) => {
    console.log(req);
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

module.exports = { getComments, postComment, updateComment, deleteComment };