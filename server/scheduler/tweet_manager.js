const axios = require("axios");
const config = require("config");
const computeOAuthSignature = require("../utils/signature");
const genToken = require("../utils/unique_token");
const User = require("../models/User");
const crypt = require("../utils/crypt");


const post = async(body) => {
    try {
        const user = await User.findById(body.user);
        const accessToken = crypt.decrypt(String(user.accessToken));
        const accessTokenSecret = crypt.decrypt(String(user.accessTokenSecret));

        data = {};

        if (body.text)
            data.text = body.text;

        if (body.media && Object.keys(body.media).length === 0)
            data.media = body.media;

        if (body.replyId && body.replyId !== "")
            data.reply = { in_reply_to_tweet_id: body.replyId };


        console.log(data);

        const OAuthParams = {
            oauth_consumer_key: config.get("consumer_key"),
            oauth_token: accessToken,
            oauth_timestamp: Math.floor(+new Date() / 1000),
            oauth_nonce: genToken(),
            oauth_signature_method: "HMAC-SHA1",
            oauth_version: "1.0"
        }

        const url = "https://api.twitter.com/2/tweets";

        const oauth_signature = computeOAuthSignature("POST", url, OAuthParams, undefined, accessTokenSecret);

        const Config = {
            headers: {
                Authorization: `OAuth oauth_consumer_key="${config.get("consumer_key")}",oauth_token="${OAuthParams.oauth_token}",oauth_signature_method="${OAuthParams.oauth_signature_method}",oauth_timestamp="${OAuthParams.oauth_timestamp}",oauth_nonce="${OAuthParams.oauth_nonce}",oauth_version="1.0",oauth_signature="${oauth_signature}"`,
                'content-Type': 'application/json'
            }
        };



        const res_twitter = await axios.post(url, data, Config);
        return res_twitter.data;
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { post };