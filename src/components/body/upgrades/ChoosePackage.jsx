import React from 'react';
import './ChoosePackage.css'
import FirstPackages from './advantagesPackeges/FirstPackages';
import SecondPackage from './advantagesPackeges/SecondPackage';
import ThirdPackages from './advantagesPackeges/ThirdPackages';
import FourthPackages from './advantagesPackeges/FourthPackages';
import FifthPackages from './advantagesPackeges/FifthPackages';
import GirlPackage from '../../icon/Girl/GirlPackage';

const ChoosePackage = () => {
    return (
        <div>
            <p className='Title-Package'>Choose your Package!</p>
            <p className='Title-Text-Package'>Available on demand: the integration of AI and GPS <br /> functionality. Prices are available after consultation <br /> via example@example.com</p>
            <div className='Container-Choose-Package'>
                <FirstPackages/>
                <SecondPackage/>
                <ThirdPackages/>
                <FourthPackages/>
                <FifthPackages/>
                <div className='GirlPhoto'><GirlPackage/></div>
            </div>
        </div>
    );
};

export default ChoosePackage;