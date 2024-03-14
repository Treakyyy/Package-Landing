import React from 'react';
import Packages from './packages/Packages';
import Upgrades from './upgrades/Upgrades';

const Body = () => {
    return (
        <div>
            <Packages/>
            <Upgrades/>
        </div>
    );
};

export default Body;