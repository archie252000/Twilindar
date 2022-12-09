import React, { useState, useEffect} from 'react';

import { TabPanel } from '../tabpanel/TabPanel';
import { DateAndTimePicker } from '../picker/DateAndTimePicker';
import { TextArea } from './TextArea';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {scheduleTweet} from "../../actions/schedule";
import {scheduleThread} from "../../actions/schedule";
import { useNavigate } from 'react-router';




export const TextModal = ({showModal, setShowModal, data}) => {

    const [isThread, setIsThread] = useState(false);
    const [tweets, setTweets] = useState([{text: "", time: (new Date()).toISOString() }]);
    const [value, setValue] = useState(0);
    const [tabsActive, setTabsActive] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false)

    const navigate = useNavigate();    

    const changeTweetTextAtindex = (index, text) => {
        
        let newTweet = tweets[index];
        let newTweetsArray = tweets;
        newTweet.text = text;
        newTweetsArray[index] = newTweet;
        setTweets(newTweetsArray);
    }

    const changeTweetTimeAtindex = (index, time) => {            
            let newTweet = tweets[index];
            let newTweetsArray = tweets;
            newTweet.time = time.toISOString();
            newTweetsArray[index] = newTweet;
            setTweets(newTweetsArray);
    }

    const addTweet = ()=>{
        setTweets([...tweets, {text: "", time: (new Date()).toISOString() }])
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    useEffect(()=>{
        
        if(tweets.length > 1)
            setIsThread(true);
        else
            setIsThread(false);

        }, [tweets]);


    useEffect(()=>{
        
        setTimeout(()=>{
            setTabsActive(true)
        },100)
        if(!(Object.keys(data).length === 0 && data.constructor === Object)){
            setIsEditMode(true);
            if(data.tweets){
                let Tweets = []
                data.tweets.map((tweet)=>Tweets.push(
                    {
                        text: tweet.text, 
                        time: (new Date(tweet.time)).toISOString() 
                    }
                ))
            
                setTweets(Tweets);

            } else {
                
               setTweets([{
                text: data.text,
                time: (new Date(data.time)).toISOString() 
           }] )
            }

        }
    },[showModal]);

    
    
    const tabProps = (index) => {
        return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`
        };
    }
  

  return (
    <div className="modal" style={{display: showModal ? "block" : "none"}}>
    <div className="modal-content">
        <div id="modal-top">
            <span onClick={()=>{setShowModal(false); setTweets([{text: "", time: (new Date()).toISOString()}])}} className="close">&times;</span>
        </div>
        <form>
            <div className="text-area-wrapper">
                <div className="tabs-wrapper" style={{display: isThread?"block":"none"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto" 
                    aria-label="scrollable auto tabs example"
                >
                        { tabsActive && isThread && (tweets.map(( _ , index) => <Tab label={`${index+1}`} {...tabProps(index)} key={index}/>))}
                </Tabs>
                </div>
                    {tabsActive && tweets.map((tweet, index)=>(
                        <TabPanel value={value} index={index} key={tweet.time}>
                            <TextArea text={tweet.text} changeTweetTextAtindex={changeTweetTextAtindex} index ={index}/>
                            <DateAndTimePicker dateAndTime={tweet.time} changeTweetTimeAtindex={changeTweetTimeAtindex} index = {index}/>
                            <div id="count">
                                <span id="maximum">/280 characters</span>
                                <span id="current">{tweet.text.length}</span>
                            </div>
                        </TabPanel>

                    ))}
            
            </div>
        

            <div id="schedule-form-bottom">
                <div id="add-to-thread-wrapper">
                    <div id="add-to-thread-button" onClick={()=>{addTweet()}}>+</div>
                </div>
                <div id="schedule-button-wrapper">
                    <input id="schedule-button" value={isThread?"Schedule Thread":"Schedule Tweet"} onClick={()=>{isThread?scheduleThread(tweets):scheduleTweet(tweets[0]); setShowModal(false); window.location.reload(false);}} readOnly/>
                </div>
            </div>
        </form>

    </div>
</div>
  )
}