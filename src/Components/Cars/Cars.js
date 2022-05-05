
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

    
const Cars = () => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data => setCars(data));
    },[])
    return (
        <div className='cars'>
             <h1 className='title-text'>My Cars</h1>
            <div className="car-container row">
            {
                cars?.map(car => <Car
                
                    key= {car.id}
                    car={car}
                >

                </Car>                                      
                )
            }
            </div>
           
        </div>
    );
};

export default Cars;