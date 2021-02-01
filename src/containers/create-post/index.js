import React, { useContext, useState } from 'react';
import './style.css';
import { SignInBtn } from '../../components';
import { UserContext } from '../../contexts/user';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {
    const [user, setUser] =  useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);

            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("image-preview");

            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block";

        }
    };

    const handleUpload = () => {};


    return (
        <div className="createPost">

        {user ? (
        <div className="createPost__loggedIn">
        <p>Create Post</p> 
        <div className="createPost__loggedInCenter">
            <textarea
             className="createPost_textarea"
             rows="3"
             value={caption}
             onChange={(e) => setCaption(e.target.value)}
             ></textarea>

             <div className="createPost__imagePreview">
                 <img id="image-preview" alt="" />
             </div>
        </div>
        <div className="createPost__loggedInBottom">
        <div className="createPost__imageUpload">
            <label htmlFor="fileInput">
            <AddAPhotoIcon style={{ cursor:"pointer", fontSize:"20px"}}/>
            </label>
            <input 
            id="fileInput"
            type="file" 
            accept="image/*" 
            onChange={handleChange} />
        </div>
        <button 
        className="createPost__uploadBtn"
        onClick={handleUpload}
        style={{color: caption ? "#000" : "lightgrey"}}
        >Upload</button>
        </div>
        </div>
        ) : (
        <div>        
            <SignInBtn />
         <p style={{ marginLeft: "14px" }}>to Post & Comment</p>
         </div> 
        )}            
        </div>
    );
}
