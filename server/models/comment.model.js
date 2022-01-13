const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    authorId: { type: mongoose.SchemaTypes.ObjectId, required: true },
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    postId: { type: String, required: true },
    parentId: String,
    thumbUp: [String],
    thumbDown: [String],
});

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
