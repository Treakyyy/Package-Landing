import React from 'react';
import './Header.scss'
import HeaderMenu from './HeaderMenu';
import BasketAndLang from './BasketAndLang';

const Header = () => {
    return (
        <div className='Header-Container'>
            <HeaderMenu/>
            <BasketAndLang/>
            <div className='Main-White-Rectangle'></div>
        </div>
    );
};

export default Header;