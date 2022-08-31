const schedule = require("node-schedule");
const axios = require("axios");
const tweetManager = require("./tweet_manager");
const Tweet = require("../models/Tweet");

const startScheduler = () => {
    return schedule.scheduleJob('*/10 * * * * *', async() => {
        try {
            let tweets = await Tweet.find({ time: { $lte: new Date() } });

            tweets.forEach(async(tweet) => {
                tweetManager.post(tweet);
                await Tweet.deleteOne({ _id: tweet._id });
            })

        } catch (err) {
            console.log(err.message)
        }
    })
};

module.exports = startScheduler;