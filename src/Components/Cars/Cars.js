

import useCars from '../../hooks/useCars';
import Car from '../Car/Car';
import './Cars.css'
import { useNavigate } from 'react-router-dom';

    
const Cars = () => {
    const navigate = useNavigate();
    const navigateToUpdate = () =>{
        navigate(`/manage-inventory`);
    }
    
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
            <button className='btn manage-button' onClick={navigateToUpdate}>Manage Inventories</button>
           
        </div>
    );
};

export default Cars;