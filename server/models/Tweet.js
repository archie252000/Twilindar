const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text: {
        type: String,
    },
    time: {
        type: Date,
        required: true

    },
    media: {
        data: Buffer,
        contentType: String,
    },
});

module.exports = Tweet = mongoose.model("tweet", TweetSchema);