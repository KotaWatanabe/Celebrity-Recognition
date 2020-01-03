import React from 'react'
import logo from '../logo.png'
import './Navigation.css'

export default function Navigation({onRouteChange, isSignedIn}) {
        if(isSignedIn){
            return(
              <nav>
                <ul className='main-nav'>
                  <li><img src={logo}/></li>
                  <li className='nav-right'><a onClick={() => onRouteChange('signout')}> Sign Out</a></li>
                </ul>
              </nav>
            )
        }else{
            return(
              <nav>
                <ul className='main-nav'>
                  <li><img src={logo}/></li>
                  <div className='nav-right'>
                    <li><a onClick={() => onRouteChange('signout')}> Sign Out</a></li>
                    <li><a onClick={() => onRouteChange('register')}> Register</a></li>
                  </div>
                </ul>
              </nav>
            )
        }
}

