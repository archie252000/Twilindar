const express = require("express");
const Router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Tweet = require("../../models/Tweet");



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

        tweetData.time = time;

        if (media)
            tweetData.media = media;

        if (text)
            tweetData.text = text;



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

//  @route  DELETE api/tweet/delete/:id
//  @desc   delete scheduled tweet
//  @access Private   

Router.delete("/delete/:id", [auth], async(req, res) => {
    try {

        const user = await User.findOne({ twitterUserId: req.userId });
        await Tweet.deleteOne({
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

        const {
            text,
            time,
            media
        } = req.body;

        const tweetData = {};


        if (time)
            tweetData.time = time;

        if (media)
            tweetData.media = media;

        if (text)
            tweetData.text = text;

        await Tweet.updateOne({
            _id: req.params.id,
            user: user._id
        }, { $set: tweetData });

        res.json({ edited: true });

    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
})


module.exports = Router;