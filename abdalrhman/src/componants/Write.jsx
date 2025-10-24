import React, { Component } from 'react';
import "./Write.css";
import Rec from "../assets/Rectangle 5.svg"
import Cir from "../assets/cir.svg"
import Icons from "../assets/icons.svg"
const Write = () => {
    return ( 
        <>
        <img className='rec' src={Rec} alt="rectangle" />
        <div className='comp'>
        <img className='img' src={Cir} alt="img" />
        <div className='whats'>What’s on your mind, Jenny</div>
        </div>
        <div>
        </div>
        <hr />
            <img className='icons' src={Icons} alt="icons" />
        </>
     );
}
 
export default Write;