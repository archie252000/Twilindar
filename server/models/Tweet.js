const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
    text: {
        type: String
    },
    time: {
        type: Date
    },
    media: {
        data: Buffer,
        contentType: String

    }
});

module.exports = Tweet = mongoose.model("Tweet", TweetSchema);