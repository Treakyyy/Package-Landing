import React from 'react';
import './Informations.scss'
import Contacts from './Contacts';
import Payment from '../../icon/Payment/Payment';

const Informations = () => {
    return (
        <div className='Container-Information'>
            <h1 className='Title-Informations'>GET IN TOUCH</h1>
            <Contacts/>
            <div className='Container-Payment'>
                <p className='Text-Agreement'>User agreement.</p>
                <div className='Payment'>
                    <p className='Text-Payment'>We are working with the systems:</p>
                    <Payment/>
                </div>
            </div>
        </div>
    );
};

export default Informations;