import React from 'react';

import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Cars from '../Cars/Cars';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            
            <Brands></Brands>
            <Counter></Counter>
            <Feature></Feature>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;