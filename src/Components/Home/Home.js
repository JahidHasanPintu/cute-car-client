import React from 'react';

import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <Contact></Contact>
            <Counter></Counter>
        </div>
    );
};

export default Home;