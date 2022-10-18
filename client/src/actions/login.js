import config from '../config/config';
import axios from 'axios';

export const login = async() => {
    const res = await axios.get(config["baseURL"] + "/api/login");
    const params = res.data.data.split("&");
    window.location.href = `https://api.twitter.com/oauth/authenticate?${params[0]}`;

}