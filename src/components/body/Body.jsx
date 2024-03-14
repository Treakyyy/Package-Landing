import React from 'react';
import Packages from './packages/Packages';
import Upgrades from './upgrades/Upgrades';
import './Body.css';

const Body = () => {
    return (
        <div className='Container-Body'>
            <Packages/>
            <Upgrades/>
        </div>
    );
};

export default Body;