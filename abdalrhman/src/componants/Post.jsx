import React, { Component } from 'react';
import "./Post.css";
import rec2 from "../assets/Rectangle 6.svg";
import Albert from "../assets/albert.svg";
import Dots from "../assets/3 points.svg";
import Water from "../assets/water.svg"
const Post = () => {
    return ( 
        <>
        <img className='rec2' src={rec2} alt="rec2" />
        <div className='alb'>
            <img className='cir2' src={Albert} alt="photo" />
            <div className='names'>Albert Flores</div>
        <img className='dots' src={Dots} alt="dot" />
        </div>
        <img className='water' src={Water} alt="water" />
        </>
     );
}
 
export default Post;