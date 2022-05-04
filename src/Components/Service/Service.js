import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,name,img,description,price}=props.service;
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`);
    }
    
    return (

        <div className='service col-sm-12 col-md-4'>
           
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h6>price: ${price} /month</h6>
            <p>{description}</p>
            <div onClick={()=> navigateToUpdate(id)} className="bg-buy-plan">
                <span  className="title4">Update</span>
            </div>
        </div>
       

    );
};

export default Service;