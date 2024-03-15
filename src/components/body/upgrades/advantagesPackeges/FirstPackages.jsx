import React from 'react';
import './FirstPackages.css'
import GreenBusket from '../../../icon/Basket/GreenBusket'
import GreenPlus from '../../../icon/Plus/GreenPlus'

const FirstPackages = () => {
    return (
    <div className='Container-1st-Package'>
        <div className='Title-First-Package'>
            <p className='Name-Package'>STARTX</p>
        </div>
        <div className='White-Tab'>
            <p className='Text-White-Tab'>ONLINE STORE APP</p>
        </div>
        <div className='White-Tab'>
            <p className='Text-White-Tab'>CRM SYSTEM</p>
        </div>
        <div className='Footer-Container-First-Package'>
            <p className='Price-Package'>$37.5K</p>
            <button className='Footer-Button-First-Packages'><GreenBusket/><GreenPlus/></button>
        </div>
        <div className='Conteiner-Mini-Tab'>
            <div className='White-Mini-Tab1-1st-Package'></div>
            <div className='White-Mini-Tab2-1st-Package'></div>
        </div>
    </div>
    );
};

export default FirstPackages;