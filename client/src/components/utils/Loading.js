import React, {useEffect} from 'react'
import config from '../../config/config'
import axios from 'axios';

import {useSearchParams, useNavigate} from 'react-router-dom';
import {MoonLoader} from 'react-spinners'

export const Loading = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const getAccessTokens = async ()=>{
        try {            
            const url = config.baseURL + `/api/accesstoken?oauth_token=${searchParams.get("oauth_token")}&oauth_verifier=${searchParams.get("oauth_verifier")}`;
            const res = await axios.get(url);
            console.log(res.data);
            window.localStorage.setItem("oauth_token", res.data["oauth_token"]);
            window.localStorage.setItem("oauth_token_secret", res.data["oauth_token_secret"]);
            navigate("/dashboard");
        } catch (err) {
            navigate("/");
        }
    }
    
    useEffect(() => {
         getAccessTokens();
        }, []);
    
    
    return ( 
        <div className="loading-page">
            <MoonLoader color={config.colors.primaryBlue} loading={true} />
        </div>
    )
}