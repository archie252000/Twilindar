const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const Request = require("requs")

//  @route  POST api/login
//  @desc   login user
//  @access Public
Router.post("/", async(req, res) => {

    const {
        twitterUserId,
        username,
        name,
        accessToken,
        accessTokenSecret
    } = req.body;

    let user = await User.findOne({ twitterUserId });

});