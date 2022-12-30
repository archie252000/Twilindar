import config from "../config/config";
import axios from "axios";

// edit tweet
export const editTweet = async(tweet, id) => {
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret"),
        "time": tweet.time
    }

    if (tweet.text)
        data.text = tweet.text;

    if (tweet.media)
        data.media = tweet.media;

    const url = config["baseURL"] + `/api/tweet/edit/${id}`;

    const res = await axios.put(url, data);


}

//edit thread
export const editThread = async(thread, id) => {


    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret"),
        "tweets": thread
    }
    console.log(thread);
    const url = config["baseURL"] + `/api/thread/edit/${id}`;

    const res = await axios.put(url, data);
    console.log(res.data);


}