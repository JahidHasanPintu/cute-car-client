import React from 'react';
import { Table } from 'react-bootstrap';
import useCars from '../../hooks/useCars';
import SingleItems from './SingleItems/SingleItems';




const ManageInventory = () => {
    const [cars] =useCars();
    return (
        <div>
             <Table responsive>
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Sold</th>
                    <th>Edit/Delete </th>
                    
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