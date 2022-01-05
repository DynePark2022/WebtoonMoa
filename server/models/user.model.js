const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const argon2 = require("argon2");

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        minlength: [2, "minimum 2 characters required"],
        maxlength: [12, "maximum 12 characters required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        unique: true,
        validate: [isEmail, "enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [8, "minimum 8 characters required"],
    },
    bookmark: [String],
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
});

UserSchema.pre("save", async function (next) {
    this.password = await argon2.hash(this.password);
    next();
});

UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await argon2.verify(user.password, password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
};

const User = mongoose.model("user", UserSchema);
module.exports = User;
