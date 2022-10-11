import config from "../config/config";
import axios from "axios";

// Schedule Tweet
export const scheduleTweet = async(tweet) => {
    const url = config["baseURL"] + "/api/tweet/schedule";
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret"),
        "time": tweet.time
    };

    if (tweet.text)
        data.text = tweet.text;

    if (tweet.media)
        data.media = tweet.media;

    const res = await axios.post(url, data);
    console.log(res.data);
    return res.data;


}