import React from 'react';
import './Loading.css'
import Loader from '../../images/loader.gif';

const Loading = () => {
    return (
        <div className='d-flex mt-5 justify-content-center align-items-center'>
            <img src={Loader} alt="" />
        </div>
    );
};

export default Loading;