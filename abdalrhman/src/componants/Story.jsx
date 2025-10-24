import React, { Component } from 'react';
import Eslam from "../assets/view.svg"
import Person from "../assets/eslam.svg";
import "./Story.css";
const Story = () => {
    return ( 
        <>
        <div className='back'>
        <img className='view' src={Eslam} alt="photo" />
        <img className='view' src={Eslam} alt="photo" />
        <img className='view' src={Eslam} alt="photo" />
        <img className='view' src={Eslam} alt="photo" />
        <div className='name'>
        </div>
        <div className='all'>
         <div className='name'>
         <img className='img' src={Person} alt="person" />
         <div className='iss'>Isalm Ali</div>
         </div>
         <div className='name'>
         <img className='img' src={Person} alt="person" />
         <div className='iss'>Isalm Ali</div>
         </div>
         <div className='name'>
         <img className='img' src={Person} alt="person" />
         <div className='iss'>Isalm Ali</div>
         </div>
         <div className='name'>
         <img className='img' src={Person} alt="person" />
         <div className='iss'>Isalm Ali</div>
         </div>
         </div>
          </div>
          
        </>
     );
}
 
export default Story;