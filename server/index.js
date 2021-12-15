const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const webtoonRoutes = require("./routes/webtoon.routes");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

app.use("/webtoon", webtoonRoutes);

app.get("/", function (req, res) {
    res.send("hi");
});

mongoose
    .connect(MONGODB_URI)
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port ${PORT}`))
    )
    .catch((error) => console.log(error.message));
