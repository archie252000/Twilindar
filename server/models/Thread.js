const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
    tweet: [{
        text: {
            type: String,
        },
        media: {
            data: Buffer,
            contentType: String,
        },
    }, ],
    time: {
        type: Date,
    },
});