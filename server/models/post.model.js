const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    commentCount: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    thumbUp: { type: Number, default: 0 },
    thumbDown: { type: Number, default: 0 },
});

PostSchema.statics.increaseView = async function (_id) {
    try {
        await this.findOneAndUpdate({ _id }, { $inc: { viewCount: 1 } });
    } catch {
        throw Error("not found");
    }
};

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
