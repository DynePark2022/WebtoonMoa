const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, JWT_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                res.redirect("/login");
            } else {
                next();
            }
        });
    } else {
        res.redirect("/login");
    }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log("checkuser");

    if (token) {
        jwt.verify(token, JWT_TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                console.log("failed!");
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                console.log("passed!");
                next();
            }
        });
    } else {
        res.locals.user = null;
        console.log("no token");
        next();
    }
};

module.exports = { requireAuth, checkUser };
