import React from 'react';
import './Footer.scss'
import Questions from './questions/Questions';
import Informations from './contacts/Informations';

const Footer = () => {
    return (
        <div className='Footer-Container'>
            <Informations/>
            <Questions/>
        </div>
    );
};

export default Footer;