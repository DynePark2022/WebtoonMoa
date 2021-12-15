const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
