const User = require("../models/user.model");
const log = require("../config/logger");

const getUser = (req, res) => {
    const { _id, username, email, bookmark } = res.locals.user;
    try {
        log.info(`GET / 201 get user. userEmail: ${email}`);
        res.status(200).json({ _id, username, email, bookmark });
    } catch (error) {
        log.error(`GET / 409 get user. ${error.message}`);
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
        log.info(`PATCH / 201 remove bookmark. userId: ${_id}`);
        res.status(201).json({ bookmark: data.bookmark });
    }

    async function addBookmark() {
        const added = bookmark.concat(webtoon_id);
        const data = await User.findByIdAndUpdate(
            _id,
            { bookmark: added },
            options
        );
        log.info(`PATCH / 201 add bookmark. userId: ${_id}`);
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
            log.error(`PATCH / 401 add bookmark(null user). ${error.message}`);
            res.status(401).json({ error: "no user" });
        } else {
            log.error(`PATCH / 409 add bookmark. ${error.message}`);
            res.status(409).json({ message: error.message });
        }
    }
};

module.exports = {
    getUser,
    patchBookmark,
};
