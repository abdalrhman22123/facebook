import React, { Component } from 'react';
import "./Friend.css";
import Rec3 from "../assets/Rectangle 2.svg"
import Person from "../assets/person2.svg"
import Butn from "../assets/buttons.svg"
const Req = () => {
    return ( 
        <>
        <img className='rec4' src={Rec3} alt="rec4" />
        <div className='person'>
        <img className='pers' src={Person} alt="pers" />
        <div className='guy'>Guy Hawkins</div>
        </div>
        <img className='btns' src={Butn} alt="btn" />

        <img className='rec5' src={Rec3} alt="rec4" />
        <div className='personn'>
        <img className='perss' src={Person} alt="pers" />
        <div className='guyy'>Guy Hawkins</div>
        </div>
        <img className='btnss' src={Butn} alt="btn" />
        </>
     );
}
 
export default Req;