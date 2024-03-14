import React from 'react';
import './FirstPackages.css';
import PurpleBusket from '../../../icon/Basket/PurpleBusket';
import PurplePlus from '../../../icon/Plus/PurplePlus';
import './FifthPackages.css'

const FifthPackages = () => {
    return (
        <div className='Container-3rd-Package'>
        <div className='Title-Fifth-Package'>
            <p className='Name-Package'>ULTRA</p>
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
            <div>
                <p className='Red-Tab'>BONUSES FOR FRIENDS</p>
            </div>
            <p className='White-Tab-Fifth-Package'>CUSTOMIZABLE <br /> CALENDAR</p>
            <p className='White-Tab-Fifth-Package'>BUSINESS VERSION</p>
            <p className='White-Tab-Fifth-Package'>YOUR PAYMENT <br /> SYSTEM</p>
            <p className='White-Tab-Fifth-Package'>GIFTS FOR CUSTOMERS</p>
            <p className='White-Tab-Fifth-Package'>YOUR STICKERS' PACK</p>
        <div className='Footer-Container-Fifth-Package'>
            <p className='Price-Package'>$300K</p>
            <button className='Footer-Button-Packages'><PurpleBusket/><PurplePlus/></button>
        </div>
        <div className='Green-Mini-Tab1-5th-Package'></div>
        <div className='Yellow-Mini-Tab2-5th-Package'></div>
        <div className='Orange-Mini-Tab3-5th-Package'></div>
        <div className='Red-Mini-Tab4-5th-Package'></div>
        <div className='White-Mini-Tab5-5th-Package'></div>
        <div className='White-Mini-Tab6-5th-Package'></div>
        <div className='White-Mini-Tab7-5th-Package'></div>
        <div className='White-Mini-Tab8-5th-Package'></div>
        <div className='White-Mini-Tab9-5th-Package'></div>
    </div>
    );
};

export default FifthPackages;