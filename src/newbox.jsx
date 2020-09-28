import React from 'react';
import './newbox.css';
import Spaceship from './spaceship';
import Icfingerprint24px from './ic_fingerprint_24px';
import Icweb24px from './ic_web_24px';
import Send2 from './send-2';
import Profile from './profile';
const Newbox = () => {
    return(<div className = "newbox">
       <div className = "float-left"></div>
       <div className = "float-right">
       <div className = "info2">
       <Spaceship />
       <h2>A growing company</h2>
       <h4>The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</h4>
       <br />
       <ul>
           <li>
           <span>  <Icfingerprint24px className = "icons"/> </span>&nbsp;&nbsp;  Carefully crafted components
           </li>
           <li>
           <span><Icweb24px className = "icons"/> </span>&nbsp;&nbsp;  Amazing page examples
           </li>
           <li>
           <span> <Send2 className = "icons"/></span> &nbsp;&nbsp; Dynamic Components
           </li>
       </ul>
       </div>
       </div>
       <Profile />
    </div>);
}

export default Newbox;