import React from 'react';
import './AddNewItem.css'

const AddNewItem = () => {
    return (
        <div>
              <section className='add-items-form'>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div className="row">
                        <div className="col text-center title">
                        <h1>ADD NEW CAR</h1>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col mt-4">
                        <input type="text" className="form-control" placeholder="Full Name"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Brand/Supplier"/>
                        </div>
                    </div>
                                
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="number" className="form-control" placeholder="Old Price"/>
                        </div>
                        <div className="col">
                        <input type="number" className="form-control" placeholder="New Price"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="number" className="form-control" placeholder="Rating"/>
                        </div>
                        <div className="col">
                        <input type="number" className="form-control" placeholder="Quantity"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="photo url"/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        
                        <textarea name="" id="" cols="32" rows="5" className="form-control" placeholder='Enter full product description here'></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-4">
                        <div className="col text-center">
                       

                        <button className="btn btn-primary mb-4">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default AddNewItem;