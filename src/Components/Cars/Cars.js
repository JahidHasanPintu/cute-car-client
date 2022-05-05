

import useCars from '../../hooks/useCars';
import Car from '../Car/Car';
import './Cars.css'

    
const Cars = () => {
    
    const [cars] =useCars();
    return (
        <div className='cars'>
             <h4 className='text-center brand'>Cars</h4>
            <div className="car-container row">
            {
                cars?.map(car => <Car
                
                    key= {car._id}
                    car={car}
                >

                </Car>                                      
                ).slice(0,6)
            }
            </div>
           
        </div>
    );
};

export default Cars;