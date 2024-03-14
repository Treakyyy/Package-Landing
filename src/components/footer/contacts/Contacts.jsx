import React from 'react';
import './Contacts.css'
import Message from '../../icon/info/Message';
import Phone from '../../icon/info/Phone';
import Place from '../../icon/info/Place';

const Contacts = () => {
    return (
        <div className='Head-Container-Contacts'>
            <div className='Container-Contacts'>
                <Message/>
                <p className='Text-Contacts'>info@example.com</p>
            </div>
            <div className='Container-Contacts'>
                <Phone/>
                <p className='Text-Contacts'>+43 681 78989087</p>
            </div>
            <div className='Container-Contacts'>
                <Place/>
                <p className='Text-Contacts'>Somewhere 89/89/0, 3060</p>
            </div>
        </div>
    );
};

export default Contacts;