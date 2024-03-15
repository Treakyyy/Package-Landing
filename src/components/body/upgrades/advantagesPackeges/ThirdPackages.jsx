import React from 'react';
import './ThirdPackages.scss'
import OrangeBusket from '../../../icon/Basket/OrangeBusket'
import OrangePlus from '../../../icon/Plus/OrangePlus'

const ThirdPackages = () => {
    return (
        <div className='Container-3rd-Package'>
                <div className='Title-Third-Package'>
                    <p className='Name-Package'>PLUS</p>
                </div>
                <div className='Green-Tab-Second-Package'>
                    <p className='Text-Green-Double-Tab'>ONLINE STORE APP</p>
                    <p className='Text-Green-Double-Tab'>CRM SYSTEM</p>
                </div>
                <div className='Yellow-Tab'>
                    <p className='Text-Yellow-Tab'>LOYALTI SYSTEM</p>
                </div>
                <div className='White-Tab'>
                    <p className='Text-White-Tab'>SOCIAL MEDIA</p>
                </div>
                <div className='White-Tab'>
                    <p className='Text-White-Tab'>NEWS FEED</p>
                </div>
                <div className='White-Tab'>
                    <p className='Text-White-Tab'>MULTILINGUAL</p>
                </div>
                <div className='Footer-Container-Third-Package'>
                    <p className='Price-Package'>$150K</p>
                    <button className='Footer-Button-Packages'><OrangeBusket/><OrangePlus/></button>
                </div>
                <div className='Conteiner-Mini-Tab'>
                    <div className='Green-Mini-Tab1-3rd-Package'></div>
                    <div className='Yellow-Mini-Tab2-3rd-Package'></div>
                    <div className='White-Mini-Tab3-3rd-Package'></div>
                    <div className='White-Mini-Tab4-3rd-Package'></div>
                    <div className='White-Mini-Tab5-3rd-Package'></div>
                </div>
        </div>
    );
};

export default ThirdPackages;