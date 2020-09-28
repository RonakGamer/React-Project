import React from 'react';
import './profile.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const Profile = () => {
    return(<div className = "profile">
    <h1><center>Here are our heroes</center></h1>
    <h4><center>According to the National Oceanic and Atmospheric Administration,<br /> Ted, Scambos, NSIDClead scentist, puts the potentially record<br /> maximum.</center></h4>
    <ul className = "ul">
        <li className = "li">
           <img src = "https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg" />
           <br />
           <h2>Ryan Tompson</h2>
           <h3>WEB DEVELOPER</h3>
           <ul>
               <li>
                    <FacebookIcon className = "icon_li"/>
               </li>
               <li>
                   <TwitterIcon className = "icon_li2"/>
               </li>
               <li>
                <InstagramIcon className = "icon_li3"/>
               </li>
           </ul>
        </li>
        <li className = "li">
        <img src = "https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg" />
        <br />
           <h2>Romina Hadid</h2>
           <h3>MARKETING</h3>
           <ul>
           <li>
                    <FacebookIcon className = "icon_li"/>
               </li>
               <li>
                   <TwitterIcon className = "icon_li2"/>
               </li>
               <li>
                <InstagramIcon className = "icon_li3"/>
               </li>
           </ul>
        </li>
        <li className = "li">
        <img src = "https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg" />
        <br />
           <h2>Alexa Smith</h2>
           <h3>UI/UX DESIGNER</h3>
           <ul>
           <li>
                    <FacebookIcon className = "icon_li"/>
               </li>
               <li>
                   <TwitterIcon className = "icon_li2"/>
               </li>
               <li>
                <InstagramIcon className = "icon_li3"/>
               </li>
           </ul>
        </li>
        <li className = "li">
        <img src = "https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png" />
        <br />
           <h2>Jenna Kardi</h2>
           <h3>CEO</h3>
           <ul>
           <li>
                    <FacebookIcon className = "icon_li"/>
               </li>
               <li>
                   <TwitterIcon className = "icon_li2"/>
               </li>
               <li>
                <InstagramIcon className = "icon_li3"/>
               </li>
           </ul>
        </li>
    </ul>
    </div>);
}

export default Profile;