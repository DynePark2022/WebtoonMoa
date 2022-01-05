const express = require("express");
const mongoose = require("mongoose");
const app = express();
const webtoonRoutes = require("./routes/webtoon.routes");
const authRoutes = require("./routes/auth.routes");
const commentRoutes = require("./routes/comment.routes");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/auth.middleware");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const ORIGIN = process.env.ORIGIN;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(cookieParser());

// DB
mongoose
    .connect(MONGODB_URI)
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port ${PORT}`))
    )
    .catch((error) => console.log(error.message));

// Routes
app.use(authRoutes);
app.use("/user", userRoutes);
app.use("/webtoon", webtoonRoutes);
app.use("/comment", commentRoutes);
app.get("*", checkUser);
app.get("/", (req, res) => {
    console.log(req);
});
app.get("/secret", requireAuth, (req, res) => {
    res.send("authorized page");
});
