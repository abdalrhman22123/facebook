import React, { Component } from 'react';
import "./Wch.css";
import Img3 from "../assets/Vector2.svg";
const Wch = () => {
    return ( 
        <>
         <div className='wtch'>
        <div className='menu'>
         <img className='watch' src={Img3} alt="watch" />
         <div>Watch</div>
        </div>
        <div className='menu'>
         <img className='watch' src={Img3} alt="watch" />
         <div>Watch</div>
        </div>
        <div className='menu'>
         <img className='watch' src={Img3} alt="watch" />
         <div>Watch</div>
        </div>
        <div className='menu'>
         <img className='watch' src={Img3} alt="watch" />
         <div>Watch</div>
        </div>  
        </div>
        
        </>
     );
}
 
export default Wch;