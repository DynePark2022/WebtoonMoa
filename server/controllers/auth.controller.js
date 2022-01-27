const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const log = require("../config/logger");

// Handle errors
const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    //incorrect email
    if (err.message === "incorrect email") {
        errors.email = "email cannot be found";
        return errors;
    }
    //incorrect password
    if (err.message === "incorrect password") {
        errors.password = "password is incorrect";
        return errors;
    }
    //duplicate error code
    if (err.code === 11000) {
        errors.email = "email alreay exists";
        return errors;
    }
    //validation errors
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
        return errors;
    }
};

const dayInSec = 24 * 60 * 60;
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;

const createToken = (id) => {
    return jwt.sign({ id }, JWT_TOKEN_SECRET, { expiresIn: dayInSec });
};

const createUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    if (password === confirmPassword) {
        try {
            const user = await User.create({ username, email, password });
            const token = createToken(user._id);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: dayInSec * 1000,
            });
            log.info(`POST / 201 user created. userEmail: ${email}`);
            return res.status(201).json(user.username);
        } catch (err) {
            const errors = handleErrors(err);
            log.error(`POST / 400 ${errors}`);
            return res.status(400).json({ errors });
        }
    }
    log.info(`POST / 401 passwords do not match`);
    return res.status(401).send("passwords do not match");
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: dayInSec * 1000,
        });
        log.info(`POST / 200 user logged in. userEmail: ${email}`);
        res.status(200).json({
            username: user.username,
            userId: user._id,
            email: user.email,
            bookmark: user.bookmark,
        });
    } catch (err) {
        const errors = handleErrors(err);
        log.error(`POST / 400 ${err}. userEmail: ${email}.`);
        res.status(400).json(errors);
    }
};

const logoutUser = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    log.info(`POST / 200 user logged out.`);
    res.send("logout");
};

const secureUser = (req, res) => {
    res.send("secure user");
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    secureUser,
};
