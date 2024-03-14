import React from 'react';
import './Header.css'
import HeaderMenu from './HeaderMenu';
import BasketAndLang from './BasketAndLang';

const Header = () => {
    return (
        <div className='Header-Container'>
            <HeaderMenu/>
            <BasketAndLang/>
        </div>
    );
};

export default Header;