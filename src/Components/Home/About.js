import React from 'react';
import homeImg from '../../Assests/homeAbout.jpg';

const About = () => {
    return (
        <div className=' mt-16'>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 '>
                <div >
                    <img className=' rounded-3xl md:w-auto' src={homeImg} alt='aboutImg'></img>
                </div>
                <div className=' mt-10 '>
                    <h1 className=' galdenoFont text-3xl font-bold' >About Us</h1>
                    <p className=' my-3'>Tejgaon College is crossing its yet another milestone by launching BBA,CSE,TMS & THM program .We are committed to build our student in accordance with the prevailing demand of the world. Studies in Business & IT in the sphere of the higher education can play the key role in meeting the demand of efficient human resource in business arena. Present Principal prof.Dr.Md. Harun-or-Rashid committed to continue the development of Tejgaon College.</p>
                </div>
            </div>
        </div>
    );
};

export default About;