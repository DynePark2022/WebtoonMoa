const Comment = require("../models/comment.model");
const log = require("../config/logger");

const getComments = async (req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Comment.find({ postId: postId, parentId: null });
        log.info(`POST / 200 get comments.`);
        res.status(200).json(comments);
    } catch (error) {
        log.error(`POST / 409 get comments. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const getNestedComments = async (req, res) => {
    const parentId = req.params.id;
    try {
        const nestedComments = await Comment.find({ parentId: parentId });
        log.info(`POST / 200 get nested comments.`);
        res.status(200).json(nestedComments);
    } catch (error) {
        log.error(`POST / 409 get nested comments. ${error.message}`);
        res.status(409).json({ message: error.message });
    }
};

const postComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        log.info(`POST / 201 comment posted. comment: ${comment}`);
        res.status(201).json(comment);
    } catch (error) {
        if (req.body.comment.length === 0) {
            log.error(
                `POST / 411 post comment(comment length 0). ${error.message}`
            );
            res.status(411).json({ message: error._message });
        } else {
            log.error(`POST / 409 post comment. ${error.message}`);
            res.status(409).json({ message: error._message });
        }
    }
};

const deleteComment = async (req, res) => {
    const _id = req.params.id;
    const checkHaveNested = await Comment.exists({ parentId: _id });
    if (checkHaveNested) {
        changeContentToDeleted(_id);
    } else {
        deleteComment(_id);
    }

    async function changeContentToDeleted(_id) {
        const update = {
            $set: {
                comment: "삭제된 댓글입니다.",
                authorId: "5d6ede6a0ba62570afcedd3a",
            },
        };
        const options = { new: true };
        try {
            const result = await Comment.findOneAndUpdate(
                { _id },
                update,
                options
            );
            res.status(204).json(result);
            log.info(`DELETE / 204 delete nested comment. commentId: ${_id} `);
        } catch (error) {
            log.error(`POST / 409 change content to deleted. ${error.message}`);
            res.status(409).json({ message: error.message });
        }
    }

    async function deleteComment(_id) {
        try {
            await Comment.findOneAndDelete({ _id });
            log.info(`DELETE / 204 comment deleted. commentId: ${_id}`);
            res.status(204).send("post deleted!");
        } catch (error) {
            log.error(`POST / 409 delete comment error. ${error.message}`);
            res.status(409).json({ message: error.message });
        }
    }
};

const likeComment = async (req, res) => {
    const _id = req.body.comment_id;
    const user_id = res.locals.user._id;
    const update = { $push: { thumbUp: user_id } };
    const options = { new: true };
    if (res.locals.user == null) {
        log.error(
            `PATCH / 403 like comment error(user null). ${error.message}`
        );
        res.status(403).json({ message: error.message });
    } else {
        try {
            const result = await Comment.findOneAndUpdate(
                { _id },
                update,
                options
            );
            log.info(`PATCH / 201 comment liked. commentId: ${_id} `);
            res.status(201).json(result);
        } catch (error) {
            res.status(409).json({ message: error.message });
            log.error(`PATCH / 409 like comment error. ${error.message}`);
        }
    }
};

module.exports = {
    getComments,
    postComment,
    deleteComment,
    getNestedComments,
    likeComment,
};
