import React from 'react';
import { Table } from 'react-bootstrap';
import useCars from '../../hooks/useCars';
import SingleItems from './SingleItems/SingleItems';
import './ManageInventory.css'




const ManageInventory = () => {
    const [cars] =useCars();
    return (
        <div>
             <Table responsive>
                <thead>
                    <tr>
                    <th className='mob-dev'>Image</th>
                    <th>Name</th>
                    <th className='mob-dev'>Brand</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th className='mob-dev'>Sold</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        cars?.map(car => <SingleItems
                            key= {car._id}
                            car={car}
                        >
                        

                        </SingleItems>                        
                        )
                    }
                </tbody>
                </Table>
        </div>
    );
};

export default ManageInventory;