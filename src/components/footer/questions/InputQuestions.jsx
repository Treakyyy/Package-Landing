import React from 'react';
import './InputQuestions.scss'

const InputQuestions = () => {
    return (
        <div className='Container-Input-Questions'>
            <input className='Input-Questions' placeholder='Name' type="text" name="" id="" />
            <input className='Input-Questions' placeholder='E-mail' type="text" name="" id="" />
            <input className='Input-Questions' placeholder='Your message' type="text" name="" id="" />
        </div>
    );
};

export default InputQuestions;