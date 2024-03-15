import React from 'react';
import './BasketAndLang.scss'
import Basket from '../icon/Basket/Basket';

const BasketAndLang = () => {
    return (
        <div className='Container-Basket-And-Lang'>
            <button className='Header-Button-Contant'>Contact us</button>
            <div className='Container-Button-Basket-And-Lang'>
                <div><Basket/></div>
                <div className='En'>EN</div>
            </div>
        </div>
    );
};

export default BasketAndLang;