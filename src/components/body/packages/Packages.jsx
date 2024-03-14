import React from 'react';
import './Packages.css'
import Arrow from '../../icon/Arrow/Arrow';
import PurpleTab from './PurpleTab';

const Packages = () => {
    return (
        <div className='Container-Packages'>
            <p className='Title-White-Line-Packages'>Packages</p>
            <div className='Green-Line'>
                <p className='Text-Packages'>StartX</p>
                <p className='Text-Packages'>$37.5k</p>
                <div className='Green-Rectangle'><Arrow/></div>
            </div>
            <div className='Yellow-Line'>
                <p className='Text-Packages'>Lite</p>
                <p className='Text-Packages'>$75k</p>
                <div className='Yellow-Rectangle'><Arrow/></div>
            </div>
            <div className='Orange-Line'>
                <p className='Text-Packages'>Plus</p>
                <p className='Text-Packages'>$150k</p>
                <div className='Orange-Rectangle'><Arrow/></div>
            </div>
            <div className='Red-Line'>
                <p className='Text-Packages'>Pro</p>
                <p className='Text-Packages'>$225k</p>
                <div className='Red-Rectangle'><Arrow/></div>
            </div>
            <PurpleTab/>
            <div className='Main-White-Rectangle'></div>
        </div>
    );
};

export default Packages;