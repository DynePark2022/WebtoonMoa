const { Router } = require("express");
const router = Router();

const webtoonController = require("../controllers/webtoons.controller");

router.get("/", webtoonController.getWebtoon);
router.post("/", webtoonController.postWebtoon);

module.exports = router;
