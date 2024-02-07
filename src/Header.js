import greenfusion from "./images/greensolutions.jpg"
import logo from "./images/vit1logo.jpg"
import "./Header.css";
import React from 'react'
import { Link } from 'react-router-dom';

import { Card, Avatar, Button } from 'react-rainbow-components';
const Header = () => {
    const avatarSmall = { width: 60, height: 60 };
  return (
    <div>
     <div>
          <Card className='card_bg'>
            <div className='vishnu'>
                <Avatar
                style={avatarSmall}
                src={logo}
                size='large'
                />
              </div>
            <h1 className='title'>Vishnu Institute Of Technology</h1>
            <Link to="/"><Button type="link" className="exit">X</Button></Link> 
            <div>
            <div className="green">
              <Avatar
              style={avatarSmall}
                  src={greenfusion}
                  //size="large"
              /> 
              <h1 className='cgf'> Green Fusion IoT Solutions</h1>
              </div>
             
              
          </div>
          </Card>
        </div>
    </div>
  )
}

export default Header
