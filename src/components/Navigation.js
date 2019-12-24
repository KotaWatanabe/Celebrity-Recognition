import React from 'react'
import logo from './logo.png'

export default function Navigation() {
    return (
        <nav style={{display: 'flex', justifyContent:'space-between', padding:'20px'}}>
              <img className='link din black pa3 pointer'src={logo} style={{ height:'100px', width:'100px'}}/>
              <p className='f3 link dim din black underline pa3 pointer'> Sign Out</p>
        </nav>
    );
}

