import config from "../config/config";
import axios from "axios";

// delete tweet
export const deleteTweet = async(id) => {
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret")
    }
    const url = config["baseURL"] + `/api/tweet/delete/${id}`
    const res = await axios.delete(url, { data });


}

// delete thread
export const deleteThread = async(id) => {
    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret")
    }
    const url = config["baseURL"] + `/api/thread/delete/${id}`
    const res = await axios.delete(url, { data });
}