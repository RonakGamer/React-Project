import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
const Footer = () => {
    return(<div className = "footer">
    <div className = "f-comp">
         <div className = "f-left">
            <h2>Let's Keep In Touch!</h2>
            <p>Find us on any of these platforms</p>
            <ul>
                <li>
                   <span><FacebookIcon /></span>
                </li>
                <li>
                <span><TwitterIcon /></span>
                </li>
                <li>
                   <span><GitHubIcon  /></span>
                </li>
            </ul>
         </div>
         <div className = "f-right">
         <div className = "ul-left">
         Useful Links
              <ul>
                  <li>
                  About Us
                  </li>
                  <li>
                  Blog
                  </li>
                  <li>
                  Github
                  </li>
                  <li>
                  Free Products
                  </li>
              </ul>
         </div>
         <div className = "ul-left">
         Other Resources
         <ul>
                  <li>
                  Terms & Conditions
                  </li>
                  <li>
                  Privacy Policy
                  </li>
                  <li>
                  Contact Us 
                  </li>
              </ul>
             </div>
         </div>
         
         </div>
         <hr className = "hr"/>
         <center>COPYRIGHT © {new Date().getFullYear()} BY RONAK LALA ALL RIGHT RESERVED </center>
    </div>);
}

export default Footer;