import React, {useEffect, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import {Card} from "../card/Card";
import {TextModal} from "../modal/TextModal";


import {authenticate} from '../../actions/auth';
import {userData, userTweets, userThreads} from '../../actions/data';

import {sortTweetsAndThreads} from "../../utils/sort";



export const Dashboard = () => {
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [tweetsAndThreads, setTweetsAndThreads] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    
    const load = async ()=> {
        try{
             const auth_data = await authenticate();
             const user_data = await userData(auth_data.username);
             const user_tweets = await userTweets();
             const user_threads = await userThreads();
             const tweets_and_threads = sortTweetsAndThreads(user_tweets, user_threads);

 
             if(auth_data.isAuth){
                 window.localStorage.setItem("isAuth", true);
  
                 setName(auth_data.name); 
                 setUsername(auth_data.username.toLowerCase());
                 setImageURL(user_data.profile_image_url.replace("_normal", ""));
                 setTweetsAndThreads(tweets_and_threads)
                
  
                } else{
                 navigate("/");
                }
         
         } catch(err){
            
             navigate("/");
         } 
     };

 

    useEffect(()=>{
        
        if(!window.localStorage.getItem("oauth_token") && !window.localStorage.getItem("oauth_token_secret"))
            navigate("/");
        load();
    },[]);
    
    
    return ( 
    <section id="dashboard">
        <section id="dashboard-inner">
            <div id="user-wrapper">
                <div id="user">
                    <img src={imageURL} id="user-image"/>
                    <div id="user-info">
                    <div id="name">{name}</div>
                    <div id="user-name">@{username}</div>
                </div>
            </div>
            <div id="logout-wrapper">
                <a href="#landing" id="logout-button">      
                    Logout
                </a>
            </div>
        </div>
        {(tweetsAndThreads.length == 0)? ( <div id="nothing-scheduled-wrapper">
            <img src={require("../../assets/NothingFigure.png")} id="nothing-image"/>
            <img src={require("../../assets/NothingMessage.png")} id="nothing-message"/>
        </div> ):
        (<div id="cards-wrapper">
            {
            tweetsAndThreads.map((obj, index)=>{
                return <Card type = {(obj.tweets)?"thread":"tweet"} text = {(obj.tweets)?(obj.tweets[0].text):(obj.text)} date={(obj.tweets)?(obj.tweets[0].time):(obj.time)} key={index}/>
            })
            } 
        </div> )}

        <TextModal showModal={showModal} setShowModal={setShowModal}/> 

        <div id="add-button-wrapper">
            <button id="add-button" onClick={()=>setShowModal(true)}>
                <img src={require("../../assets/add-button.png")}id="add-button-image"/>
            </button>
        </div>
        <div id="bottom-wrapper">
            <img src={require("../../assets/logo-text.png")} id="logo-text"/>
        </div>
    </section>
</section>
    )
}