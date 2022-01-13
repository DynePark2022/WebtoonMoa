const { Router } = require("express");
const router = Router();

const PostController = require("../controllers/post.controller");
const { requireAuth, checkUser } = require("../middleware/auth.middleware");

router.get("/", PostController.getPosts);
router.get("/:id", PostController.getSinglePost);
router.post("/", PostController.postPost);
router.delete("/:id", requireAuth, PostController.deletePost);
router.patch("/like", checkUser, PostController.likePost);

module.exports = router;
