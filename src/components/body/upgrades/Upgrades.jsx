import React from 'react';
import './Upgrades.css'
import UpgradesLine from './UpgradesLine';
import ChoosePackage from './ChoosePackage';

const Upgrades = () => {
    return (
        <div className='Container-Upgrades'>
            <p className='Title-Upgrades'>UPGRADING TO THE NEXT VERSION</p>
            <p className='Text-Upgrades'>You can start with any of the packages and upgrade <br /> over time once you need the added functionality</p>
            <UpgradesLine/>
            <ChoosePackage/>
        </div>
    );
};

export default Upgrades;