import React from 'react';
import './MulticoloredColumn.scss'

const MulticoloredColumn = () => {
    return (
        <div className='Container-MulticoloredColumn'>
            <div className='Green-Rectangle-Columns'>
                <p className='Text-Rectangle-Columns'>ONLINE STORE APP <br /> CRM SYSTEM</p>
                <div className='Mini-Green-Rectangle-Columns'></div>
            </div>
            <div className='Yellow-Rectangle-Columns'>
                <p className='Text-Rectangle-Columns'>LOYALTY SYSTEM</p>
                <div className='Mini-Yellow-Rectangle-Columns'></div>
            </div>
            <div className='Orange-Rectangle-Columns'>
                <p className='Text-Rectangle-Columns'>SOCIAL MEDIA<br /> NEWS FEED <br /> MULTILINGUAL</p>
                <div className='Mini-Orange-Rectangle-Columns'></div>
            </div>
            <div className='Red-Rectangle-Columns'>
                <p className='Text-Rectangle-Columns'>BONUSES <br /> FOR FRIENDS</p>
                <div className='Mini-Red-Rectangle-Columns'></div>
            </div>
        </div>
    );
};

export default MulticoloredColumn;