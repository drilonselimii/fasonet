import React, { useState, useContext } from 'react';
import { Comment } from '../../components';
import './style.css';
import { db, storage } from '../../firebase';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../contexts/user';


export default function Post({profileUrl, username, id, photoURL, caption, comments}) {

    const [user, setUser] =  useContext(UserContext).user;    
    const deletePost = () => {
        // delete the image from firebase storage

        // get reference to the image file we want to delete
        var imageRef = storage.refFromURL(photoURL);

        imageRef
        .delete()
        .then(function () {
            console.log("Post deleted successfully");
        })
        .catch(function (error) {
            console.log(`Error ${error}`);
        });

        // step 2 delete the post info from firebase firestore
        db.collection("posts")
        .doc(id)
        .delete()
        .then(function () {
            console.log("Post info deleted successfully");
        })
        .catch(function (error) {
            console.log(`Error while deleting post info ${error}`);
        });
    };

    return (
        <div className="post">

            <div className="post__header">
                <div className="post__headerLeft">
                <img className="post_profilePic" src={profileUrl} />
                <p style={{marginLeft:"10px"}}>{username}</p>
                </div>
                <button onClick={deletePost} className="post__delete">Delete</button>
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

           {user ? <CommentInput comemnts={comments} id={id}        
            /> : <></> }           
        </div>
    )
}
