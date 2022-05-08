import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


import { Table } from 'react-bootstrap';
import deletIcon from '../../images/deleteicon.png';
import editIcon from '../../images/edit.png';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getMycar = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/mycar?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setCars(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMycar();
      
    }, [user])

      // for edit icon 
      
      const navigateToUpdate = id =>{
          navigate(`/inventory/${id}`);
      }

        // delete icon 
    //  const [cars,setCars]=useCars();
     const handleDelete = id =>{
        const proceed = window.confirm( `Are you sure want to delete`);
        if(proceed){
            const url= `http://localhost:5000/cars/${id}`;
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
            {
               cars.length==0? <h2>You have not added any car</h2> : <div>
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
            }
            

        </div>
    );
};

export default MyItem;