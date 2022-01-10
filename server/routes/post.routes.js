const { Router } = require("express");
const router = Router();

const PostController = require("../controllers/post.controller");
const { requireAuth } = require("../middleware/auth.middleware");

router.get("/", PostController.getPosts);
router.get("/:id", PostController.getSinglePost);
router.post("/", PostController.postPost);
router.delete("/:id", requireAuth, PostController.deletePost);

module.exports = router;
