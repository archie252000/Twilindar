import React from 'react';
import config from '../../config/config';
import axios from 'axios';


export const Landing = () => {
    
    
    const login = async () => { 
        const res = await axios.get(config["baseURL"]+"/api/login");
        const params = res.data.data.split("&");
        window.location.href = `https://api.twitter.com/oauth/authenticate?${params[0]}`

    }
 
return (

        <section id="landing">
        <section id="landing-upper">
            <h1>WELCOME TO<br/>TWILINDAR</h1>
            <img src={require("../../assets/fig1.png")} id="fig-1" alt=""/>
            <img src={require("../../assets/logo-white.png")} id="logo-landing" alt=""/>
        </section>
        <section id="landing-lower">
            <button onClick={login} id="sign-in-twitter">
                <img src={require("../../assets/twitter-logo.png")} id="twitter-logo" alt=""/>
                Sign in with Twitter
            </button>
            <img src={require("../../assets/fig2.png")} id="fig-2" alt=""/>
        </section>
        </section>

   
  )
}
