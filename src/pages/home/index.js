import React from 'react';
import './style.css';
import Navbar from '../../containers/navbar';
import { CreatePost } from '../../containers';

export default function Home() {
    return(
        <div className="home">
            <Navbar />
            <CreatePost />
        </div>
    )
}