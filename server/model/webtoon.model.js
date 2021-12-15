const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebtoonSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true },
    genre: String,
    age: String,
    days: String,
    likes: Number,
    hates: Number,
});

const Webtoon = mongoose.model("webtoon", WebtoonSchema);
module.exports = Webtoon;
