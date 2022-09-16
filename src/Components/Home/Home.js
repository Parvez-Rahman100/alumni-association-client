import React from 'react';
import About from './About';
import Gallary from './Gallary';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
          <HeroSection/>
          <About/>
          <Gallary/>
        </div>
    );
};

export default Home;