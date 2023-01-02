import React from 'react';
import hero from '../../Assests/hero.png'

const HeroSection = () => {
    return (
        <div className='flex flex-wrap justify-between items-center mt-20'>
            <div>
                <h1 className='text-4xl font-bold'>Alumni Association</h1>
                <p>A case study of CSE Department, Tejgaon College </p>
                <h1 className=' my-7 galadaFonts text-4xl'>Providing Great Platfrom for Alumni</h1>
            </div>
            <div className=' ml-3'>
                <img src={hero} alt='hero'></img>
            </div>
        </div>
    );
};

export default HeroSection;