import React from 'react';
import './SingleItems.css'
import deletIcon from '../../../images/deleteicon.png';
import editIcon from '../../../images/edit.png';
import { useNavigate } from 'react-router-dom';

const SingleItems = (props) => {
    
    const {_id,name,img,description,price,supplier,ratings,quantity,sold}=props.car;
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <tr>
                    <td className='mob-dev'><img className='car-icon' src={img} alt="" /></td>
                    <td>{name}</td>
                    <td className='mob-dev'>{supplier}</td>
                    <td>{price}</td>
                    
                    <td>{quantity}</td>
                    <td className='mob-dev'>{sold}</td>
                    <td className='delet-icon'> 
                    <img onClick={()=> navigateToUpdate(_id)}  src={editIcon} alt="" />
                    </td>
                    <td className='delet-icon'> 
                    <img  src={deletIcon} alt="" />
                    </td>

                   
        </tr>
    );
};

export default SingleItems;