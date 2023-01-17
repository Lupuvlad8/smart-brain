import React from 'react';
import './Navigation.css';
import brain from './brain.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav>
          <div className='app'>
            <img className='invert' src={brain} alt='logo' />
            <p className='appname'>smart-brain</p>
          </div>
          <p onClick={() => onRouteChange('signout')} className='navbutton'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav>
          <div className='app'>
            <img className='invert' src={brain} alt='logo' />
            <p className='appname'>smart-brain</p>
          </div>
          <p onClick={() => onRouteChange('signin')} className='navbutton'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='navbutton'>Register</p>
        </nav>
      );
    }
}

export default Navigation;
