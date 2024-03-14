import React from 'react';
import './Payment.css';
import IconUnion from '../../../img/IconUnion.png';
import IconMasterCard from '../../../img/IconMasterCard.png';
import IconVisa from '../../../img/IconVisa.png';
import IconPaypal from '../../../img/IconPaypal.png';

const Payment = () => {
    return (
        <div className='Container-Payment-System'>
            <img className='Union' src={IconUnion} alt="" />
            <img className='MasterCard' src={IconMasterCard} alt="" />
            <img className='Visa' src={IconVisa} alt="" />
            <img className='Paypal' src={IconPaypal} alt="" />
        </div>
    );
};

export default Payment;