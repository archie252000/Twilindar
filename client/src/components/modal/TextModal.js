import React, { useState, useRef, useEffect, createRef} from 'react';

import dayjs, { Dayjs } from 'dayjs';
import { TabPanel } from '../tabpanel/TabPanel';
import { DateAndTimePicker } from '../picker/DateAndTimePicker';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import config from "../../config/config";

import {scheduleTweet} from "../../actions/schedule";



export const TextModal = ({showModal, setShowModal}) => {

    const [charCount, setCharCount] = useState(0);
    const [dateAndTime, setDateAndTime] = useState(dayjs('2018-01-01T00:00:00.000Z'));
    const [isThread, setIsThread] = useState(false);
    const [tweets, setTweets] = useState([{text: "", time: "" }]);
  

    const [value, setValue] = React.useState(0);

    const currentTweet = useRef(null);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const addTweet = ()=>{
        console.log(currentTweet.current.value);
        setTweets([...tweets, {}]);
    }

    useEffect(()=>{
        if(tweets.length > 1)
            setIsThread(true);
        else
            setIsThread(false);
        }, [tweets]);


    
    const tabProps = (index) => {
        return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`
        };
    }
  

  return (
    <div className="modal" style={{display: showModal ? "block" : "none"}}>
    <div className="modal-content">
        <div id="modal-top" onClick={()=>setShowModal(false)}>
            <span className="close">&times;</span>
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
                        { isThread && (tweets.map((tweet, index) => <Tab label={`${index+1}`} {...tabProps(index)}/>))}
                </Tabs>
                </div>
                <div className='tweet-text-wrapper'>
                </div>
                    {tweets.map((tweet, index)=>(
                        <TabPanel value={value} index={index} key={index.toString()}>
                            <textarea ref ={currentTweet} className= "tweet-text" maxLength="280" onKeyUp={(e)=>setCharCount(e.target.value.length)}>{index}</textarea>
                            <DateAndTimePicker dateAndTime={dateAndTime} setDateAndTime={setDateAndTime}/>
                        </TabPanel>

                    ))}
            </div>
        
            <div id="count">
                <span id="maximum">/280 characters</span>
                <span id="current">{charCount}</span>
            </div>
            <div id="schedule-form-bottom">
                <div id="add-to-thread-wrapper">
                    <div id="add-to-thread-button" onClick={()=>addTweet()}>+</div>
                </div>
                <div id="schedule-button-wrapper">
                    <input id="schedule-button" value="Schedule Tweet" onClick={()=>{console.log(currentTweet)}} readOnly/>
                </div>
            </div>
        </form>

    </div>
</div>
  )
}
