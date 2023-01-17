import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
    <div className='logo-container center'>
        <Tilt className='Tilt'>
                <img src={brain} alt='logo' className='logo'></img>

        </Tilt>
    </div>
    )
}

export default Logo;
