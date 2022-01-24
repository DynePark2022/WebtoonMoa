const { Router } = require("express");
const router = Router();

const webtoonController = require("../controllers/webtoons.controller");

router.get("/", webtoonController.getWebtoons);
router.get("/updated", webtoonController.getWebtoonsUpdated);
router.get("/filtered", webtoonController.getWebtoonsFiltered);
router.get("/recommended", webtoonController.getWebtoonsRecommended);
router.get("/bookmark", webtoonController.getBookmarked);
router.get("/:id", webtoonController.getSingleWebtoon);
router.get("/search/:name", webtoonController.searchWebtoon);
router.post("/", webtoonController.postWebtoon);

module.exports = router;
