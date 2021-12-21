const User = require("../models/user.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

const createToken = (id) => {
    return jwt.sign({ id }, JWT_Token_Secret, { expiresIn: dayInSec });
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
            return res.status(201).json({ user: user._id });
        } catch (err) {
            const errors = handleErrors(err);
            return res.status(400).json({ errors });
        }
    }
    res.status(400).send("passwords do not match");
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        res.status(200).json(user._id);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

const logoutUser = (req, res) => {
    res.send("logout user");
};

module.exports = { createUser, loginUser, logoutUser };
