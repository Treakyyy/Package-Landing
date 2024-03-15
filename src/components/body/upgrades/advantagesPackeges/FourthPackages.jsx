import React from 'react';
import './FourthPackages.css';
import RedBusket from '../../../icon/Basket/RedBusket'
import RedPlus from '../../../icon/Plus/RedPlus'

const FourthPackages = () => {
    return (
        <div className='Container-3rd-Package'>
            <div className='Title-Fourth-Package'>
                <p className='Name-Package'>PRO</p>
            </div>
            <div className='Green-Tab-Second-Package'>
                <p className='Text-Green-Double-Tab'>ONLINE STORE APP</p>
                <p className='Text-Green-Double-Tab'>CRM SYSTEM</p>
            </div>
                <div className='Yellow-Tab'>
                    <p className='Text-Yellow-Tab'>LOYALTI SYSTEM</p>
                </div>
                <div className='Orange-Triple-Tab'>
                    <p className='Text-Orange-Triple-Tab'>SOCIAL MEDIA</p>
                    <p className='Text-Orange-Triple-Tab'>NEWS FEED</p>
                    <p className='Text-Orange-Triple-Tab'>MULTILINGUAL</p>
                </div>
                <div className='White-Tab'>
                    <p className='Text-White-Tab'>BONUSES FOR FRIENDS</p>
                </div>
            <div className='Footer-Container-Fourth-Package'>
                <p className='Price-Package'>$225K</p>
                <button className='Footer-Button-Packages'><RedBusket/><RedPlus/></button>
            </div>
            <div className='Conteiner-Mini-Tab'>
                <div className='Green-Mini-Tab1-4th-Package'></div>
                <div className='Yellow-Mini-Tab2-4th-Package'></div>
                <div className='Orange-Mini-Tab3-4th-Package'></div>
                <div className='White-Mini-Tab4-4th-Package'></div>
            </div>
        </div>
    );
};

export default FourthPackages;