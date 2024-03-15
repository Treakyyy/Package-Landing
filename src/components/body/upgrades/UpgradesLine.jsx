import React from 'react';
import './UpgradesLine.scss';
import ArrowGreen from '../../icon/Arrow/ArrowGreen';
import ArrowYellow from '../../icon/Arrow/ArrowYellow';
import ArrowOrange from '../../icon/Arrow/ArrowOrange';
import ArrowRed from '../../icon/Arrow/ArrowRed';
import YellowBusket from '../../icon/Basket/YellowBusket';
import OrangeBusket from '../../icon/Basket/OrangeBusket';
import RedBusket from '../../icon/Basket/RedBusket';
import PurpleBusket from '../../icon/Basket/PurpleBusket';
import YellowPlus from '../../icon/Plus/YellowPlus';
import OrangePlus from '../../icon/Plus/OrangePlus';
import RedPlus from '../../icon/Plus/RedPlus';
import PurplePlus from '../../icon/Plus/PurplePlus';

const UpgradesLine = () => {
    return (
        <div className='Container-Upgrades-Line'>
            <div className='Container-Green-Line'>
                <div className='Upgrades-Green'>
                    <p className='Text-Line-Upgrades'>STARTX</p>
                    <ArrowGreen/>
                    <p className='Text-Line-Upgrades'>LITE</p>
                </div>
                <button className='Uprgrades-Button-Basket-Plus-Green'><YellowBusket/><YellowPlus/></button>
                <p className='Price-Green'>$52.5K</p>
            </div>
            <div className='Container-Yellow-Line'>
                <div className='Upgrades-Yellow'>
                    <p className='Text-Line-Upgrades'>LITE</p>
                    <ArrowYellow/>
                    <p className='Text-Line-Upgrades'>PLUS</p>
                </div>
                <button className='Uprgrades-Button-Basket-Plus-Yellow'><OrangeBusket/><OrangePlus/></button>
                <p className='Price-Yellow'>$105K</p>
            </div>
            <div className='Container-Orange-Line'>
                <div className='Upgrades-Orange'>
                    <p className='Text-Line-Upgrades'>PLUS</p>
                    <ArrowOrange/>
                    <p className='Text-Line-Upgrades'>PRO</p>
                </div>
                <button className='Uprgrades-Button-Basket-Plus-Orange'><RedBusket/><RedPlus/></button>
                <p className='Price-Orange'>$105K</p>
            </div>
            <div className='Container-Red-Line'>
                <div className='Upgrades-Red'>
                    <p className='Text-Line-Upgrades'>PRO</p>
                    <ArrowRed/>
                    <p className='Text-Line-Upgrades'>ULTRA</p>
                </div>
                <button className='Uprgrades-Button-Basket-Plus-Red'><PurpleBusket/><PurplePlus/></button>
                <p className='Price-Red'>$105K</p>
            </div>
        </div>
    );
};

export default UpgradesLine;