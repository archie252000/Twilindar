const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const config = require("config")
const axios = require("axios")

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



});

module.exports = Router;