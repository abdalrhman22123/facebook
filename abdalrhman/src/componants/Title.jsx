import React, { Component } from 'react';
import "./Title.css";
import Ux from "../assets/ux.svg";
const Title = () => {
    return (  
        <>
        <div className='offer'>
            <div className='tile'>Title</div>
            <div className='see'>See all</div>
        </div>
        <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>
         <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>
         <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>
         <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>
         <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>
         <div className='info'>
        <img className='ux' src={Ux} alt="design" />
        <div className='ui'>UI / UX Designers & Developers</div>
        </div>

        
        </>
    );
}
 
export default Title;