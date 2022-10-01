const express = require("express");
const Router = express.Router();
const axios = require("axios");
const crypt = require("../../utils/crypt");

//  @route  GET api/accesstoken
//  @desc   Get access tokens
//  @access Public

Router.get("/", [], async(req, res) => {
    try {
        const url = `https://api.twitter.com/oauth/access_token?oauth_verifier=${req.query.oauth_verifier}&oauth_token=${req.query.oauth_token}`;
        const twitterRes = await axios.get(url);
        const tokensArray = twitterRes.data.split("&").map((val) => val.split("="));
        const tokens = {};
        tokensArray.forEach((val) => {
            if (val[0] != "screen_name" && val[0] != "user_id")
                tokens[val[0]] = crypt.encrypt(val[1]);
        });
        res.json(tokens);
    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }
});
module.exports = Router;