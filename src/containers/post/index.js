import React, { useState, useContext } from 'react';
import { Comment } from '../../components';
import './style.css';

export default function Post({profileUrl, username, id, photoURL, caption, comments}) {

    

    return (
        <div className="post">

            <div className="post__header">
                <div className="post__headerLeft">
                <img className="post_profilePic" src={profileUrl} />
                <p style={{marginLeft:"10px"}}>{username}</p>
                </div>
                <button className="post__delete">Delete</button>
            </div>

            <div className="post__center">
                <img className="post__photoUrl" src={photoURL} />
                </div> 
            <div>
                <p>
                  <span style={{fontWeight:"600", marginRight: "6px"}}>{username}</span>
                  {caption}
                </p>
            </div>

            {comments ? comments.map((comment)=>
            <Comment username={comment.username} 
            caption={comment.comment}/>) : (<></>)}           
        </div>
    )
}
