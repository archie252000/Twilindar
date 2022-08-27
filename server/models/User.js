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
    }
});

module.exports = User = mongoose.model("user", UserSchema);