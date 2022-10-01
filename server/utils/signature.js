const URL = require('url');
const config = require('config');
const crypto = require("crypto");



const computeOAuthSignature = (httpMethod, url, OAuthParams, body, OAuthTokenSecret) => {
    let params = [];

    const url_parts = URL.parse(url, true);

    const query = url_parts.query;

    for (let key of Object.keys(query)) {
        params.push([encodeURIComponent(String(key)), encodeURIComponent(String(query[key]))]);
    }

    if (OAuthParams) {
        for (let key of Object.keys(OAuthParams)) {
            params.push([encodeURIComponent(String(key)), encodeURIComponent(String(OAuthParams[key]))]);
        }
    }

    if (body) {
        for (let key of Object.keys(body)) {
            params.push([encodeURIComponent(String(key)), encodeURIComponent(String(body[key]))]);
        }
    }


    params.sort();

    let paramString = "";

    for (let i = 0; i < params.length; i++) {
        paramString += String(params[i][0]) + "=" + String(params[i][1]);

        if (i != params.length - 1)
            paramString += "&";
    }

    let signatureBaseString = httpMethod.toUpperCase() + "&";
    signatureBaseString += encodeURIComponent(url.split("?")[0]) + "&";
    signatureBaseString += encodeURIComponent(paramString);

    let signingKey = encodeURIComponent(config.get("consumer_key_secret")) + "&" + encodeURIComponent(OAuthTokenSecret);
    return encodeURIComponent((Buffer.from(crypto.createHmac('sha1', signingKey).update(signatureBaseString).digest("hex"), "hex")).toString("base64"));

}

module.exports = computeOAuthSignature;