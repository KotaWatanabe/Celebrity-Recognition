import React from 'react'
import logo from './logo.png'

export default function Navigation({onRouteChange, isSignedIn}) {
        if(isSignedIn){
            return(
              <nav style={{display: 'flex', justifyContent:'space-between', padding:'20px'}}>
                <img className='link din black pa3 pointer'src={logo} style={{ height:'100px', width:'100px'}}/>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim din black underline pa3 pointer'> Sign Out</p>
              </nav>
            )
        }else{
            return(
              <nav style={{display: 'flex', justifyContent:'space-between', padding:'20px'}}>
                <img className='link din black pa3 pointer'src={logo} style={{ height:'100px', width:'100px'}}/>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim din black underline pa3 pointer'> Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim din black underline pa3 pointer'> Register</p>
              </nav>
            )
        }
}

