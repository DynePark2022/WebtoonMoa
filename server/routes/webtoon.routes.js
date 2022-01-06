const { Router } = require("express");
const router = Router();

const webtoonController = require("../controllers/webtoons.controller");

router.get("/", webtoonController.getWebtoons);
router.get("/bookmark", webtoonController.getBookmarked);
router.get("/:id", webtoonController.getSingleWebtoon);
router.post("/", webtoonController.postWebtoon);

module.exports = router;
