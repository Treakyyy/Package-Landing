import React from 'react';
import IconBasket from '../../../img/IconBasket.png'
import './Basket.css'

const Basket = () => {
    return (
        <button className='Basket-Button'><img className='Icon-Basket' src={IconBasket} alt="" /></button>
    );
};

export default Basket;