const { Router } = require("express");
const router = Router();

const commentController = require("../controllers/comment.controller");

router.get("/:id", commentController.getComments);
router.get("/nested/:id", commentController.getNestedComments);
router.post("/", commentController.postComment);
router.delete("/:id", commentController.deleteComment);
// router.put("/", authController.updateComment);

module.exports = router;
