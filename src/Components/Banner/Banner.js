import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://demo.themesuite.com/automotive/images/slide-show4.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>All Brand new cars in one place</h3>
                    <p>You will find here all types of and all brands car. You can explore many care and gather knowledge.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://demo.themesuite.com/automotive/images/slide-show1.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Luxuarious collections and Brands</h3>
                    <p>We have the world's most popular and expensives branded cars. Just Have a look </p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                </Carousel>
        </div>
    );
};

export default Banner;