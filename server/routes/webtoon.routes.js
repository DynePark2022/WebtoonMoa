const express = require("express");
const router = express.Router();
const {
    getWebtoon,
    createWebtoon,
} = require("../controllers/webtoons.controller");

router.get("/", getWebtoon);
router.post("/", createWebtoon);

module.exports = router;
