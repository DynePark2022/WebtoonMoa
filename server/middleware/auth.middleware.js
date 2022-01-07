const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const requireAuth = (req, res, next) => {
    let token = req.cookies.jwt;
    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, JWT_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log("AAA");
                res.redirect("/login");
            } else {
                console.log("BBB");
                next();
            }
        });
    } else {
        console.log("CCC");
        res.redirect("/login");
    }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log("check");

    if (token) {
        jwt.verify(token, JWT_TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log("check--AA");
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                console.log("check--BB");
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        console.log("check--CC");
        next();
    }
};

module.exports = { requireAuth, checkUser };
