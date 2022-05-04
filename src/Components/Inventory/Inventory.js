import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../images/shoe_1.jpg';


import './Inventory.css';

const Inventory = () => {
    const {inventoryID}=useParams();
    return (
        <div>
            
            <div className="card-wrapper">
                <div className="card">
                {/* card left side or image side  */}
                <div className= "product-imgs">
                <div className= "img-display">
                    <div className= "img-showcase">
                    
                    <img src = {img1} alt = "shoe 1"/>
                    
                    </div>
                </div>
                
                </div>
                {/* Card Right Side  */}
                <div className= "product-content">
                    <h2 className= "product-title">nike shoes Id: {inventoryID}</h2>
                    <a href = "#" className= "product-link">visit nike store</a>
                    <div className= "product-rating">
                        <i className= "fas fa-star"></i>
                        <i className= "fas fa-star"></i>
                        <i className= "fas fa-star"></i>
                        <i className= "fas fa-star"></i>
                        <i className= "fas fa-star-half-alt"></i>
                        <span>4.7(21)</span>
                    </div>

                    <div className= "product-price">
                        <p className= "last-price">Old Price: <span>$257.00</span></p>
                        <p className= "new-price">New Price: <span>$249.00 (5%)</span></p>
                    </div>

                    <div className= "product-detail">
                        <h3>about this item: </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        
                    </div>

                    <div className= "purchase-info">
                        <input type = "number" placeholder='0'/>
                        <button type = "button" className= "product-button">Restock </button>
                        <button type = "button" className= "product-button">Delivered</button>
                    </div>

                    <div className= "social-links">
                        <p>Share At: </p>
                        <a href = "#">
                        <i className= "fab fa-facebook-f"></i>
                        </a>
                        <a href = "#">
                        <i className= "fab fa-twitter"></i>
                        </a>
                        <a href = "#">
                        <i className= "fab fa-instagram"></i>
                        </a>
                        <a href = "#">
                        <i className= "fab fa-whatsapp"></i>
                        </a>
                        <a href = "#">
                        <i className= "fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;