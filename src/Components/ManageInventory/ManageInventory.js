import React from 'react';
import { Table } from 'react-bootstrap';
import useCars from '../../hooks/useCars';
import './ManageInventory.css'
import { useNavigate } from 'react-router-dom';
import './SingleItems/SingleItems.css';
import deletIcon from '../../images/deleteicon.png';
import editIcon from '../../images/edit.png';




const ManageInventory = () => {
    const [cars,setCars] =useCars();
    
      // for edit icon 
      const navigate = useNavigate();
      const navigateToUpdate = id =>{
          navigate(`/inventory/${id}`);
      }

      const navigateToAddNew = () =>{
        navigate(`/add-new`);
    }

     // delete icon 
    //  const [cars,setCars]=useCars();
     const handleDelete = id =>{
         const proceed = window.confirm( `Are you sure want to delete`);
         if(proceed){
             const url= `https://secure-cliffs-70594.herokuapp.com/cars/${id}`;
         fetch(url,{
             method: 'DELETE'
             
         })
         .then(res=>res.json())
         .then(result =>{
             console.log(result);
             const remaining = cars.filter(car=>car._id !== id);
             setCars(remaining);
            //  update.handleUpdate(_id);
         })
         }
     }
    return (
        <div>
            <div className="text-center buttons">
                <button className='btn add-button'>Total Cars : {cars.length}</button>
                <button className='btn add-button' onClick={navigateToAddNew}>Add New</button>
             
            </div>
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
                                      
                    {cars?.map(car=>
                        <tr key={car._id}>
                        <td className='mob-dev'><img className='car-icon' src={car.img} alt="" /></td>
                        <td>{car.name}</td>
                        <td className='mob-dev'>{car.supplier}</td>
                        <td>{car.price}</td>
                        
                        <td>{car.quantity}</td>
                        <td className='mob-dev'>{car.sold}</td>
                        <td className='delet-icon'> 
                        <img onClick={()=> navigateToUpdate(car._id)}  src={editIcon} alt="" />
                        </td>
                        <td className='delet-icon'> 
                        <img onClick={()=> handleDelete(car._id)} src={deletIcon} alt="" />
                        </td>
                         </tr>
                    )}

                </tbody>
                </Table>
        </div>
    );
};

export default ManageInventory;