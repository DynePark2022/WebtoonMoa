const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    postId: { type: String, required: true },
    parentId: String,
    thumbUp: [String],
    thumbDown: [String],
});

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
