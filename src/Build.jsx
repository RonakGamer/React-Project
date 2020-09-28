import React from 'react';
import './build.css';
import Vector from './vector';
import Award48 from './award2-48';
import Iclightbulboutline48 from './ic_lightbulb_outline_48px';

const Build = () => {
    return(<div className = "build">
    <div className = "top">
        <h1><center>Build something</center></h1>
        <h4><center>Put the potentially record low maximum sea ice extent tihs year down to low ice. According to<br /> the National Oceanic and Atmospheric<br /> Administration, Ted, Scambos.</center></h4>
    </div>
    <div className = "ullist">
        <ul>
            <li>
             <span><center><Award48 /></center></span>
             <center className = "center">Some quick example text to build on the card title and make up the bulk of the card's content.</center>
           </li>
           <li>
           <span><center><Iclightbulboutline48 /></center></span>
           <center className = "center">Some quick example text to build on the card title and make up the bulk of the card's content.</center>
           </li>
           <li>
           <span><center><Vector /></center></span>
           <center className = "center">Some quick example text to build on the card title and make up the bulk of the card's content.</center>
           </li>
        </ul>
    </div>
    <div className = "form">
        <div className = "formpad">
        <h2>Want to work with us?</h2>
        <h4>We will get back to you in 24 hours.</h4>
        <form action = "#">
            <label>Full Name :- </label><br />
            <input type = "text" placeholder = "Enter Full Name" required/><br />
            <label>Email :- </label><br />
            <input type = "email" placeholder = "Enter your Email ID" required/><br />
            <label>Message :- </label><br />
           <textarea type = "text" placeholder = "Message" required></textarea><br />
           <center><button>Send Message</button></center>
        </form>
        </div>
        
    </div>
    </div>);
}

export default Build;