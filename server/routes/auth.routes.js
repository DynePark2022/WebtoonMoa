const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth.controller");

router.post("/signup", authController.createUser);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);

module.exports = router;
