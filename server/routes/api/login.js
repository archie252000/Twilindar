 const express = require("express");
 const Router = express.Router();
 const config = require("config");
 const computeOAuthSignature = require("../../utils/signature");
 const genToken = require("../../utils/unique_token");


 const axios = require("axios");

 // @route  api/login
 // @desc   login via twitter
 // @access public
 Router.get("/", async(req, res) => {
     try {
         const OAuthParams = {
             oauth_consumer_key: config.get("consumer_key"),
             oauth_timestamp: Math.floor(+new Date() / 1000),
             oauth_nonce: genToken(),
             oauth_signature_method: "HMAC-SHA1",
             oauth_version: "1.0"
         }

         const url = "https://api.twitter.com/oauth/request_token";

         const oauth_signature = computeOAuthSignature("GET", url, OAuthParams, undefined, "");

         const Config = {
             headers: {
                 Authorization: `OAuth oauth_consumer_key="${config.get("consumer_key")}",oauth_signature_method="${OAuthParams.oauth_signature_method}",oauth_timestamp="${OAuthParams.oauth_timestamp}",oauth_nonce="${OAuthParams.oauth_nonce}",oauth_version="1.0",oauth_signature="${oauth_signature}"`,
                 'content-Type': 'application/json'
             }
         };

         const res_twitter = await axios.get(url, Config);

         res.json({ data: res_twitter.data });

     } catch (err) {
         res.status(500).send({
             msg: "Server Error",
             error: err.message
         });
     }

 })

 module.exports = Router;