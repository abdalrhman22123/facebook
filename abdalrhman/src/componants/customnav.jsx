import React, { Component } from 'react';
import "./Customnav.css";
import Img from "../assets/Group 1.svg";
import Img2 from "../assets/Vector.svg";
const Nav = () => {
    return ( 
      <>
     <nav className='nav'>
       <img className='face' src={Img} alt="face" />
       <div className='allhome'>
         <img className='Home' src={Img2} alt="Home" />
         <img className='Home' src={Img2} alt="Home" />
         <img className='Home' src={Img2} alt="Home" />
         <img className='Home' src={Img2} alt="Home" />
       </div>
     </nav>
     </>
     );
}
 
export default Nav;