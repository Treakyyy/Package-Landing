import React from 'react';
import './PurpleTab.scss'
import MulticoloredColumn from './MulticoloredColumn';
import WhiteColumn from './WhiteColumn';
import Plus from '../../icon/Plus/Plus';
import ArrowUp from '../../icon/Arrow/ArrowUp';
import PurpleBusket from '../../icon/Basket/PurpleBusket'

const PurpleTab = () => {
    return (
        <div className='Container-PurpleTab'>
            <div className='Container-Ultra-Description'>
                <h1 className='Header-Title-PurpleTab'>ULTRA</h1>
                <p className='Header-Text-PurpleTab'>The most complete package <br /> of functions with maximum <br /> opportunities for the complete <br /> management of your business from <br /> anywhere in the world at any time!</p>
                <div className='Container-PurpleTab-Button'>
                    <button className='Button-300'>$300K</button>
                    <button className='Button-Basket-And-Plus'><PurpleBusket/><Plus/></button>
                </div>
            </div>
            <div className='Container-Coloms'>
                <MulticoloredColumn/>
                <WhiteColumn/>
            </div>
            <div className='Purple-Mini-Rectangle'><ArrowUp/></div>
        </div>
    );
};

export default PurpleTab;