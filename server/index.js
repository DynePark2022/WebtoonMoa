const express = require("express");
const mongoose = require("mongoose");
const app = express();
const webtoonRoutes = require("./routes/webtoon.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// DB
mongoose
    .connect(MONGODB_URI)
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port ${PORT}`))
    )
    .catch((error) => console.log(error.message));

// Routes
app.get("/", function (req, res) {
    res.send("hi");
});
// app.get("/set-cookies", function (req, res) {
//     const dayInSec = 60 * 60 * 24;
//     res.setHeader("Set-Cookie", "newUser=true");
//     res.cookie("newUser", false, { maxAge: 1000 * dayInSec, httpOnly: true });
//     res.send("cookie");
// });

app.use("/webtoon", webtoonRoutes);
app.use(authRoutes);
