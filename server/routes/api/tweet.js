const express = require("express");
const Router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Tweet = require("../../models/Tweet");
const luxon = require("luxon");
const schedule = require("node-schedule");



//  @route  POST api/tweet
//  @desc   get tweets scheduled by user
//  @access Private

Router.post("/", [auth], async(req, res) => {
    try {
        const user = await User.findOne({ twitterUserId: String(req.userId) });

        const tweets = await Tweet.find({ user: user._id });

        res.json({ "tweets": tweets });
    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });

    }

});


//  @route  POST api/tweet/schedule
//  @desc   schedule a tweet at a paticular date and time
//  @access Private   

Router.post("/schedule", [auth], async(req, res) => {
    try {

        const {
            text,
            time,
            media
        } = req.body;

        const user = await User.findOne({ twitterUserId: req.userId })

        const tweetData = {};

        tweetData.user = user._id;

        tweetData["time"] = time;

        if (media)
            tweetData["media"] = media;

        if (text)
            tweetData["text"] = text;

        console.log(tweetData);

        const tweet = new Tweet(tweetData);

        tweet.save();


        res.json({ scheduled: true });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
})



module.exports = Router;