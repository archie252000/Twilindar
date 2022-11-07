import React from 'react';
import {deleteTweet} from '../../actions/delete'

export const Card = ({type, text, date, id}) => {
  return (
       <div className="card">
                <div className="card-top">
                     
                    {(type === "tweet")?(<div className="card-heading">Tweet</div>):(<div className="card-heading">Thread <img className="thread-icon" src={require("../../assets/thread-icon.png")}></img></div>)}
                    <div className="card-date"><b>Date: {(new Date(date)).toLocaleDateString()} Time:  {(new Date(date)).toLocaleTimeString()}</b></div>
                </div>
                <div className="card-middle">
                    <p>{text}</p>
                </div>
                <div className="card-bottom">
                    <div className="action-button edit-button">Edit</div>
                    <div className="action-button media-button">Media</div>
                    <div className="action-button delete-button" onClick={()=>{deleteTweet(id); window.location.reload(false);}}>Delete</div>
                </div>
          </div>
          )

  
}
