import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useServices();
    // console.log(services);
    return (
        <div className='services'>
             <h1 className='title-text'>My Services</h1>
            <div className="service-container row">
            {
                services?.map(service => <Service
                    key= {service.id}
                    service={service}
                >  
                       
                </Service> )
            }
            </div>
        </div>
    );
};

export default Services;