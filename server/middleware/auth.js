const axios = require("axios");
const config = require("config");
const computeOAuthSignature = require("../utils/signature");
const genToken = require("../utils/unique_token");
const crypt = require("../utils/crypt");

const auth = async(req, res, next) => {
    try {

        const OAuthParams = {
            oauth_consumer_key: config.get("consumer_key"),
            oauth_token: crypt.decrypt(req.body.oauth_token),
            oauth_timestamp: Math.floor(+new Date() / 1000),
            oauth_nonce: genToken(),
            oauth_signature_method: "HMAC-SHA1",
            oauth_version: "1.0"
        }

        const url = "https://api.twitter.com/1.1/account/verify_credentials.json";

        const oauth_signature = computeOAuthSignature("GET", url, OAuthParams, undefined, crypt.decrypt(req.body.oauth_token_secret));

        const Config = {
            headers: {
                Authorization: `OAuth oauth_consumer_key="${config.get("consumer_key")}",oauth_token="${OAuthParams.oauth_token}",oauth_signature_method="${OAuthParams.oauth_signature_method}",oauth_timestamp="${OAuthParams.oauth_timestamp}",oauth_nonce="${OAuthParams.oauth_nonce}",oauth_version="1.0",oauth_signature="${oauth_signature}"`,
                'content-Type': 'application/json'
            }
        };

        const res_twitter = await axios.get(url, Config);


        req.userId = res_twitter.data.id;
        req.username = res_twitter.data.screen_name;
        req.name = res_twitter.data.name;

        next();


    } catch (err) {
        res.json({
            error: err.message,
            isAuth: false
        });
    }

}


module.exports = auth;