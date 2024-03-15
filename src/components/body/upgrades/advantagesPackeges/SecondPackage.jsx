import React from 'react';
import './SecondPackage.css'
import YellowBusket from '../../../icon/Basket/YellowBusket'
import YellowPlus from '../../../icon/Plus/YellowPlus'

const SecondPackage = () => {
    return (
        <div className='Container-2nd-Package'>
                <div className='Title-Second-Package'>
                    <p className='Name-Package'>LITE</p>
                </div>
                <div className='Green-Tab-Second-Package'>
                    <p className='Text-Green-Double-Tab'>ONLINE STORE APP</p>
                    <p className='Text-Green-Double-Tab'>CRM SYSTEM</p>
                </div>
                <div className='White-Tab'>
                    <p className='Text-White-Tab'>LOYALTY SYSTEM</p>
                </div>
                <div className='Footer-Container-Second-Package'>
                    <p className='Price-Package'>$37.5K</p>
                    <button className='Footer-Button-Packages'><YellowBusket/><YellowPlus/></button>
                </div>
                <div className='Conteiner-Mini-Tab'>
                    <div className='Green-Mini-Tab1-2nd-Package'></div>
                    <div className='White-Mini-Tab2-2nd-Package'></div>
                </div>
        </div>
    );
};

export default SecondPackage;