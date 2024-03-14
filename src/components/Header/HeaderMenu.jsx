import React from 'react';
import './HeaderMenu.css'

const HeaderMenu = () => {
    return (
        <div className='Container-Header-Button'>
            <button className='Header-Button'>About us</button> 
            <button className='Header-Button'>Team</button> 
            <button className='Header-Button'>Projects</button> 
        </div>
    );
};

export default HeaderMenu;