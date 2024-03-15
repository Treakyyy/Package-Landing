import React from 'react';
import './WhiteColumn.scss'

const WhiteColumn = () => {
    return (
        <div className='Container-WhiteColumn'>
            <div className='White-Coloms'>
                <p className='Text-White-Coloms'>CUSTOMIZABLE CALENDAR</p>
                <div className='White-Rectangle1'></div>
            </div>
            <div className='White-Coloms'>
                <p className='Text-White-Coloms'>BUSINESS VERSION</p>
                <div className='White-Rectangle2'></div>
            </div>
            <div className='White-Coloms'>
                <p className='Text-White-Coloms'>YOUR PAYMENT <br /> SYSTEM</p>
                <div className='White-Rectangle3'></div>
            </div>
            <div className='White-Coloms'>
                <p className='Text-White-Coloms'>GIFTS <br /> FOR CUSTOMERS</p>
                <div className='White-Rectangle4'></div>
            </div>
            <div className='White-Coloms'>
                <p className='Text-White-Coloms'>YOUR <br /> STICKERS' PACK</p>
                <div className='White-Rectangle5'></div>
            </div>
        </div>
    );
};

export default WhiteColumn;