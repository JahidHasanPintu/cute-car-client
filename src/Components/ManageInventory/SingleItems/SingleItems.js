import React from 'react';
import './SingleItems.css'

const SingleItems = (props) => {
    
    const {index,name,img,description,price,supplier,ratings,quantity,sold}=props.car;
    return (
        <tr>
                    <td><img className='car-icon' src={img} alt="" /></td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{supplier}</td>
                    <td>{quantity}</td>
                    <td>{sold}</td>
                    <td> 
                    <i class="delete-icon fa-solid fa-trash-can"></i>
                    </td>

                   
        </tr>
    );
};

export default SingleItems;