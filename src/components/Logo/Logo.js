import React from 'react';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
    <div className='logo-container center'>
        <div className='animation'>
                <img src={brain} alt='logo' className='logo'></img>

        </div>
    </div>
    )
}

export default Logo;
