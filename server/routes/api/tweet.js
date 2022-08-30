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

    const user = await User.findOne({ twitterUserId: String(req.userId) });

    const tweets = await Tweet.find({ user: user._id });

    res.json({ "tweets": tweets });

});


//  @route  POST api/tweet/schedule
//  @desc   schedule a tweet at a paticular date and time
//  @access Private   

Router.post("/schedule", [auth], async(req, res) => {
    const {
        text,
        time,
        media
    } = req.body;

    const user = await User.findOne({ twitterUserId: req.userId })

    const tweet = new Tweet({
        user: user._id,
        text: text,
        time: time,
        media: media
    });

    tweet.save();


    res.json({ scheduled: true });
})



module.exports = Router;