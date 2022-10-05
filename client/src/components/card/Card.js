import React from 'react'

export const Card = ({type, text, date}) => {
  return (
       <div className="card">
                <div className="card-top">
                     
                    {(type == "tweet")?(<div className="card-heading">Tweet</div>):(<div className="card-heading">Thread <img className="thread-icon" src={require("../../assets/thread-icon.png")}></img></div>)}
                    <div className="card-date"><b>Date: {(new Date(date)).toLocaleDateString()} Time:  {(new Date(date)).toLocaleTimeString()}</b></div>
                </div>
                <div className="card-middle">
                    <p>{text}</p>
                </div>
                <div className="card-bottom">
                    <a href="#" className="action-button edit-button">Edit</a>
                    <a href="#" className="action-button media-button">Media</a>
                    <a href="#" className="action-button delete-button">Delete</a>
                </div>
          </div>
          )

  
}
