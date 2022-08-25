const axios = require("axios");
const config = require("config");
const computeOAuthSignature = require("../utils/signature");
const genToken = require("../utils/unique_token");

const auth = async(req, res, next) => {
    try {

        const OAuthParams = {
            oauth_consumer_key: config.get("consumer_key"),
            oauth_token: req.body.accessToken,
            oauth_timestamp: "1661436470",
            oauth_nonce: genToken(),
            oauth_signature_method: "HMAC-SHA1",
            oauth_version: "1.0"
        }

        const oauth_signature = computeOAuthSignature("GET", "https://api.twitter.com/1.1/account/verify_credentials.json", OAuthParams, undefined, req.body.accessTokenSecret);
        const Config = {
            headers: {
                Authorization: `OAuth oauth_consumer_key="${config.get("consumer_key")}",oauth_token="${OAuthParams.oauth_token}",oauth_signature_method="${OAuthParams.oauth_signature_method}",oauth_timestamp="${OAuthParams.oauth_timestamp}",oauth_nonce="${OAuthParams.oauth_nonce}",oauth_version="1.0",oauth_signature="${oauth_signature}"`,
                'content-Type': 'application/json'
            }
        };
        const res_twitter = await axios.get("https://api.twitter.com/1.1/account/verify_credentials.json", Config);
        res.json(res_twitter.data);
        next();


    } catch (err) {
        console.log(err);
    }

}


module.exports = auth;