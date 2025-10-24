import React, { Component } from 'react';
import Nav from '../componants/customnav';
import Btn from '../componants/Btn';
import Wch from '../componants/Wch';
import "./feed.css";
import Story from '../componants/Story';
import Write from '../componants/Write';
import Post from '../componants/Post';


const Home = () => {
    return ( 
        <>
    <Nav />
    <Btn />
    <Wch />
    <Story />
    <Write />
    <Post />

        </>
     );
}
 
export default Home;