const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebtoonSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    // isAdult: { type: Boolean, required: true },
    toon: String,
    age: String,
    genre: String,
    days: String,
    likes: Number,
    hates: Number,
    latest_episode: String,
    latest_url: String,
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
});

WebtoonSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const Webtoon = mongoose.model("webtoon", WebtoonSchema);
module.exports = Webtoon;
