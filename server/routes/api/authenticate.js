const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth")

//  @route  POST api/login
//  @desc   login user
//  @access Private
Router.post("/", [auth], async(req, res) => {

    const user = await User.findOne({ twitterUserId: String(req.userId) });
    if (!user) {
        const user = new User({
            twitterUserId: String(req.userId),
            name: req.name,
            username: req.username

        });
        user.save();
    }

    res.json({ isAuth: true });

});

module.exports = Router;