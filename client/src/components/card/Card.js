import React, {Fragment, useEffect, useState} from 'react';
import {deleteTweet, deleteThread} from '../../actions/delete'
import { TextModal } from '../modal/TextModal';

export const Card = ({type, text, date, data}) => {

    const [showModal, setShowModal] = useState(false);



    const deleteTweetOrThread = ()=> { 
        (type === "tweet")?(deleteTweet(data._id)):(deleteThread(data._id)); 
        window.location.reload(false);
    }

    const editTweetOrThread = ()=>{
        setShowModal(true)
    }
  
  
    return (
        <Fragment>     
            <div className="card">
                        <div className="card-top">
                            {(type === "tweet")?(<div className="card-heading">Tweet</div>):(<div className="card-heading">Thread <img className="thread-icon" src={require("../../assets/thread-icon.png")}></img></div>)}
                            <div className="card-date"><b>Date: {(new Date(date)).toLocaleDateString()} Time:  {(new Date(date)).toLocaleTimeString()}</b></div>
                        </div>
                        <div className="card-middle">
                            <p>{text}</p>
                        </div>
                        <div className="card-bottom">
                            <div className="action-button edit-button" onClick={editTweetOrThread}>Edit</div>
                            <div className="action-button media-button">Media</div>
                            <div className="action-button delete-button" onClick={deleteTweetOrThread}>Delete</div>
                        </div>
                </div>
                <TextModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        data = {data}
                    />
        </Fragment>
          )

  
}
