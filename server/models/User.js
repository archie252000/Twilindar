const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    twitterUserId: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
    accessTokenSecret: {
        type: String,
        required: true,
    },
    isAuth: {
        type: Boolean,
        default: false,
    },
});

module.export = User = mongoose.model("user", UserSchema);