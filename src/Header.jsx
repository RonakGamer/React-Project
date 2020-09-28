import React from 'react';
import './index.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';
import Info from './info';
const Header = () => {
    return(
        <>
    <div className = "header">
    <div className = "left">
        <h1>TAILWIND STARTER KIT</h1>
        <img src = "single-folded-content.png" /> <span>Docs</span>
        </div>
        <div className = "right">
          <ul>
              <li>
                  <FacebookIcon />
              </li>
              <li>
              <TwitterIcon />
              </li>
              <li>
              <GitHubIcon  />
              </li>
              <li>
               <button><GetAppIcon className = "icon"/> Download</button>
              </li>
          </ul>
        </div>
    </div>
    <Info />
    </>);
}
export default Header;