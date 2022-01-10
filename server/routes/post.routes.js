const { Router } = require("express");
const router = Router();

const PostController = require("../controllers/post.controller");

router.get("/", PostController.getPosts);
router.get("/:id", PostController.getSinglePost);
router.post("/", PostController.postPost);
router.delete("/:id", PostController.deletePost);

module.exports = router;
