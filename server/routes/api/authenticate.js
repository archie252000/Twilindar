const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const crypt = require("../../utils/crypt");

//  @route  POST api/login
//  @desc   login user
//  @access Private
Router.post("/", [auth], async(req, res) => {
    try {
        const user = await User.findOne({ twitterUserId: String(req.userId) });
        if (!user) {
            const user = new User({
                twitterUserId: String(req.userId),
                name: req.name,
                username: req.username,
                accessToken: crypt.encrypt(String(req.body.accessToken)),
                accessTokenSecret: crypt.encrypt(String(req.body.accessTokenSecret))

            });
            user.save();
        }

        res.json({
            isAuth: true,
            name: req.name,
            username: req.username
        });
    } catch (err) {
        res.status(500).send({
            msg: "Server Error",
            error: err.message
        });
    }

});

module.exports = Router;