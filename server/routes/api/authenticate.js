const express = require("express");
const Router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth")

//  @route  POST api/login
//  @desc   login user
//  @access Private
Router.post("/", [auth], async(req, res) => {

    let user = await User.findOne({ id: String(req.userId) }).exec();
    console.log(req.userId);
    if (!user) {

    }

    return res.data;

});

module.exports = Router;