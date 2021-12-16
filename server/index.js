const express = require("express");
const mongoose = require("mongoose");
const app = express();
const webtoonRoutes = require("./routes/webtoon.routes");
const authRoutes = require("./routes/auth.routes");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.use("/webtoon", webtoonRoutes);
app.use(authRoutes);
