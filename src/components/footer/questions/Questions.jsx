import React from 'react';
import './Questions.scss'
import InputQuestions from './InputQuestions';
import GirlFooter from '../../icon/Girl/GirlFooter'
import Other from '../../icon/other/Other';

const Questions = () => {
    return (
        <div className='Container-Questions'>
            <h2 className='Title-Questions'>ANY QUESTIONS?</h2>
            <InputQuestions/>
            <div className='Container-Text-Agree'>
                <p className='Text-Agree'>I agree with</p>
                <p className='Text-Agree-Underline'>privacy policy</p>
            </div>
            <button className='Send-Button'>SEND</button>
            <div className='Container-GirlFooter'>
                <GirlFooter/>
            </div>
            <div className='Container-Other'>
                <Other/>
            </div>
        </div>
    );
};

export default Questions;