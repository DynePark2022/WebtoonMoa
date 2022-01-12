const User = require("../models/user.model");

const getUser = (req, res) => {
    const { username, email, bookmark, createdAt: joined } = res.locals.user;
    try {
        res.status(200).json({ username, email, bookmark, joined });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// todo

const patchBookmark = async (req, res) => {
    const webtoon_id = req.body.webtoon_id;
    const { _id, bookmark } = res.locals.user;
    const options = { new: true };

    async function removeBookmark() {
        const index = bookmark.indexOf(webtoon_id);
        bookmark.splice(index, 1);
        const data = await User.findByIdAndUpdate(_id, { bookmark }, options);
        res.status(201).json({ bookmark: data.bookmark });
    }

    async function addBookmark() {
        const added = bookmark.concat(webtoon_id);
        const data = await User.findByIdAndUpdate(
            _id,
            { bookmark: added },
            options
        );
        res.status(201).json({ bookmark: data.bookmark });
    }

    try {
        if (bookmark.includes(webtoon_id)) {
            removeBookmark();
        } else {
            addBookmark();
        }
    } catch (error) {
        if (res.locals.user === null) {
            res.status(401).json({ error: "no user" });
        } else {
            res.status(409).json({ message: error.message });
        }
    }
};

module.exports = {
    getUser,
    patchBookmark,
};
