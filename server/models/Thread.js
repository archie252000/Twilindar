const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    tweets: [{
        replyId: {
            type: String,
            default: ""
        },
        text: {
            type: String,
        },
        media: {
            data: Buffer,
            contentType: String,
        },
        time: {
            type: Date,
            required: true
        },
    }, ],
});

module.exports = Thread = mongoose.model("thread", ThreadSchema);