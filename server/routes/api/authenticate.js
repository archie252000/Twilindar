const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const config = require("config")
const axios = require("axios")
const auth = require("../../middleware/auth")

//  @route  POST api/login
//  @desc   login user
//  @access Public
Router.post("/", [auth], async(req, res) => {

    const {
        twitterUserId,
        username,
        name,
        accessToken,
        accessTokenSecret
    } = req.body;

    return res.data;

});

module.exports = Router;