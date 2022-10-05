import config from "../config/config";
import axios from "axios";

// Returns user data
export const userData = async(username) => {
    const url = config["baseURL"] + "/api/user";
    const data = { screen_name: username };
    const res = await axios.post(url, data);
    return res.data;
}

// Return scheduled tweets
export const userTweets = async() => {
    const url = config["baseURL"] + "/api/tweet"
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret")
    }

    const res = await axios.post(url, data);
    return res.data.tweets;
}

// Return scheduled threads
export const userThreads = async() => {
    const url = config["baseURL"] + "/api/thread";
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret")
    }

    const res = await axios.post(url, data);
    return res.data.threads;
}