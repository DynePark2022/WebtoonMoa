const User = require("../models/user.model");

const getUser = (req, res) => {
    try {
        const {
            username,
            email,
            bookmark,
            createdAt: joined,
        } = res.locals.user;
        res.status(200).json({ username, email, bookmark, joined });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// todo
const patchBookmark = async (req, res) => {
    console.log("patch bookmark");
    try {
        const webtoonId = req.params.id;
        const { _id, bookmark } = res.locals.user;
        // console.log(11111111);
        // console.log(_id.toString());
        // console.log(webtoonId);
        // if (_id.toString() == webtoonId) {
        //     console.log("same");
        // } else {
        //     console.log("diff");
        // }
        console.log(`webtoonId`);
        console.log(webtoonId);
        console.log(`before bookmark`);
        console.log(bookmark);
        if (!bookmark.includes(webtoonId)) {
            console.log("dont include");
            const added = bookmark.push(webtoonId);
            console.log(added);
            await User.findByIdAndUpdate(
                { _id },
                { bookmark: added },
                { new: true },
                (error, data) => {
                    if (error) {
                        console.log(error);
                        // res.status(409).json({ message: error.message });
                    } else {
                        console.log(data);
                        console.log("added");
                        // res.status(200).json(data);
                    }
                }
            );
        } else {
            console.log("include");
            const index = bookmark.indexOf(webtoonId);
            console.log(`index${index}`);
            const deleted = bookmark.splice(index, 1);
            console.log(`After bookmark`);
            console.log(bookmark);
            console.log(`deleted${deleted}`);
            await User.findByIdAndUpdate(
                { _id },
                { bookmark: deleted },
                { new: true },
                (error, data) => {
                    if (error) {
                        // res.status(409).json({ message: error.message });
                        console.log(error);
                    } else {
                        console.log(data);
                        console.log("removed");
                        // res.status(200).json(data);
                    }
                }
            );
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getUser,
    patchBookmark,
};
