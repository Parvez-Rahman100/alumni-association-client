import React from 'react';
import About from './About';
import Contact from './Contact';
import Gallary from './Gallary';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
          <HeroSection/>
          <About/>
          <Gallary/>
          <Contact/>
        </div>
    );
};

export default Home;