const schedule = require("node-schedule");
const axios = require("axios");
const tweetManager = require("./tweet_manager");
const Tweet = require("../models/Tweet");
const Thread = require("../models/Thread");


const startScheduler = () => {

    return schedule.scheduleJob('*/10 * * * * *', async() => {
        try {

            // Find tweets to pe posted right now
            let tweets = await Tweet.find({ time: { $lte: new Date() } });

            // Post tweet and delete from database
            tweets.forEach(async(tweet) => {
                tweetManager.post(tweet);
                await Tweet.deleteOne({ _id: tweet._id });
            })


            // Find threads to pe posted right now
            let threads = await Thread.find({ "tweets.time": { $lte: new Date() } });



            threads.forEach(async(thread) => {
                // take tweets from thread
                let tweets = thread.tweets;

                // If thread is not empty
                if (tweets.length > 0) {

                    // Take the first tweet in thread
                    let tweet = tweets[0];
                    tweet.user = thread.user;

                    // Post the tweet
                    const res_tweet = await tweetManager.post(tweet);

                    // Remove the tweet from the thread
                    await Thread.updateOne({ _id: thread._id }, { $pop: { tweets: -1 } })



                    // put the id of the posted tweet in reply id of next tweet
                    if (res_tweet) {
                        await Thread.updateMany({ _id: thread._id }, {
                            $set: {
                                "tweets.0.replyId": res_tweet.data.id
                            }
                        })
                    }

                    // If thread is empty (last tweet posted), delete it
                    if (tweets.length == 1)
                        await Thread.deleteOne({ _id: thread._id });


                }


            })



        } catch (err) {
            console.log(err.message)
        }
    })
};

module.exports = startScheduler;