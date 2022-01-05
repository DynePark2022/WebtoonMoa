const { Router } = require("express");
const router = Router();

const userController = require("../controllers/user.controller");
const { checkUser } = require("../middleware/auth.middleware");

router.get("/", checkUser, userController.getUser);
router.get("/bookmark/:id", checkUser, userController.patchBookmark);

module.exports = router;
