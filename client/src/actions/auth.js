import { useNavigate } from 'react-router-dom';
import config from "../config/config";
import axios from "axios";
export const authenticate = async() => {

    const url = config["baseURL"] + "/api/authenticate";

    const data = {
        "oauth_token": window.localStorage.getItem("oauth_token"),
        "oauth_token_secret": window.localStorage.getItem("oauth_token_secret")
    };

    const res = await axios.post(url, data);

    return res.data
}