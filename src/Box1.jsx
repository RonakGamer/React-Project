import React from 'react';
import './Box.css'
import  Award48 from './award-48';
import Icfreebreakfast48px from './ic_free_breakfast_48px';
import Icverifieduser48px from './ic_verified_user_48px';
import Single01 from './single-01';

const Box1 = () => {
    return(
        <>
    <div className = "box1">
        <ul>
            <li>
               <span><Award48 /> </span>
               <h2><center>Awarded Agency</center></h2>
               <h5><center>Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</center></h5>
            </li>
            <li>
                <span><Icfreebreakfast48px /></span>
                <h2><center>Free Revisions</center></h2>
                <h5><center>Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.</center></h5>
            </li>
            <li>
                <span><Icverifieduser48px /></span>
                <h2><center>Verified Company</center></h2>
                <h5><center>Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!</center></h5>
            </li>
        </ul>
        <div className = "box2">
        <div className = "box2-left">
            <Single01 /><br />
            <h2>Working with us is a pleasure</h2>
            <p>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.</p>
            <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.</p>
            <h4>Check Tailwind Starter Kit!</h4>
        </div>
        <div className = "box2-right">
            <img src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" />
            <div className = "bgcolor">
                <h2>Top Notch Services</h2>
                <h5>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.</h5>
            </div>
        </div>
    </div>
    </div>
    
    </>
    );
}
export default Box1;