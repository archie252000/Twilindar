const express = require("express");
const Router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Thread = require("../../models/Thread");



//  @route  POST api/thread
//  @desc   get threads scheduled by user
//  @access Private

Router.post("/", [auth], async(req, res) => {
    try {
        const user = await User.findOne({ twitterUserId: String(req.userId) });

        const thread = await Thread.find({ user: user._id });

        res.json({ "thread": thread.tweets });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });

    }

});


//  @route  POST api/thread/schedule
//  @desc   schedule a thread with tweets at different time and date
//  @access Private   

Router.post("/schedule", [auth], async(req, res) => {
    try {


        const user = await User.findOne({ twitterUserId: req.userId });

        threadData = {}

        threadData.user = user._id;

        tweets = [];

        req.body.tweets.forEach((tweet) => {

            tweetData = {};

            tweetData.time = tweet.time;

            if (tweet.media)
                tweetData.media = tweet.media;

            if (tweet.text)
                tweetData.text = tweet.text;

            tweets.push(tweetData)

        });

        threadData.tweets = tweets;

        const thread = new Thread(threadData);

        thread.save();

        res.json({ scheduled: true });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
})

//  @route  DELETE api/tweet/delete/:id
//  @desc   delete scheduled tweet
//  @access Private   

Router.delete("/delete/:id", [auth], async(req, res) => {
    try {

        const user = await User.findOne({ twitterUserId: req.userId });
        await Thread.deleteOne({
            _id: req.params.id,
            user: user._id
        });

        res.json({ deleted: true });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
})

//  @route  PUT api/tweet/edit/:id
//  @desc   edit scheduled tweet
//  @access Private   

Router.put("/edit/:id", [auth], async(req, res) => {
    try {
        const user = await User.findOne({ twitterUserId: req.userId });

        threadData = {}

        threadData.user = user._id;

        tweets = [];

        req.body.tweets.forEach((tweet) => {

            tweetData = {};
            if (tweet.time)
                tweetData.time = time;

            if (tweet.media)
                tweetData.media = media;

            if (tweet.text)
                tweetData.text = text;

            tweets.push(tweetData)

        });

        await Thread.updateOne({
            _id: req.params.id,
            user: user._id
        }, { $set: threadData });

        res.json({ edited: true });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
})


module.exports = Router;