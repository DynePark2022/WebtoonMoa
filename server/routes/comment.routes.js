const { Router } = require("express");
const router = Router();

const commentController = require("../controllers/comment.controller");
const { checkUser } = require("../middleware/auth.middleware");

router.get("/:id", commentController.getComments);
router.get("/nested/:id", commentController.getNestedComments);
router.post("/", commentController.postComment);
router.delete("/:id", commentController.deleteComment);
router.patch("/like", checkUser, commentController.likeComment);

module.exports = router;
