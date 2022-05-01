import React from 'react';

import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Services from '../Services/Services';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Counter></Counter>
        </div>
    );
};

export default Home;