import React from 'react'

export default function Comment({username, caption}) {
    return (
        <div className="comment"> 
         <p>     
            <span style={{fontWeight:"600", marginRight: "6px"}}>{username}</span>
            {caption}
         </p>            
        </div>
    )
}
