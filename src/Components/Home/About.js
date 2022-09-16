import React from 'react';
import about from '../../Assests/about.png'

const About = () => {
    return (
        <div className=' flex justify-between  my-16 '>
            <div style={{width:400,height:400}}>
                <img src={about} alt='aboutImg'></img>
            </div>
            <div className=' mt-10'>
                <h1 className=' galdenoFont text-3xl font-bold' >About Us</h1>
            </div>
        </div>
    );
};

export default About;