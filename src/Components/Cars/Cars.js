
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

    
const Cars = () => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data => setCars(data));
    },[])
    return (
        <div className='cars'>
             <h1 className='title-text'>My Cars</h1>
            <div className="car-container row">
            {
                cars?.map(car => <Car
                
                    key= {car._id}
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