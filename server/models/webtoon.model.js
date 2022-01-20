const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebtoonSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    platform: [String],
    genre: [String],
    days: [String],
    synopsis: String,
    original: String,
    age: String,
    image_small: String,
    latest_episode: String,
    first_episode_url: String,
    latest_episode_url: String,
    publisher: String,
    category: String,
    author: [String],
    run_start: Date,
    run_end: Date,
    updated: { type: Date, default: () => Date.now() },
    likes: { type: Number, default: 0 },
    hates: { type: Number, default: 0 },
});

WebtoonSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const Webtoon = mongoose.model("webtoon", WebtoonSchema);
module.exports = Webtoon;
