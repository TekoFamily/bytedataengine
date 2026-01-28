import React from 'react';
import Hero from '../components/home/Hero';
import ArchitecturePage from './ArchitecturePage';
import Problems from '../components/home/Problems';
// import Pipeline from '../components/home/Pipeline';
import Features from '../components/home/Features';
import TrustSection from '../components/home/TrustSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Problems />
            <ArchitecturePage />
            <TrustSection />
            {/*   <Pipeline /> */}
            <Features />
        </>
    );
};

export default HomePage;
