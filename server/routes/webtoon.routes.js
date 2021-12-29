const { Router } = require("express");
const router = Router();

const webtoonController = require("../controllers/webtoons.controller");

router.get("/", webtoonController.getWebtoons);
router.get("/:title", webtoonController.getSingleWebtoon);
router.post("/", webtoonController.postWebtoon);

module.exports = router;
