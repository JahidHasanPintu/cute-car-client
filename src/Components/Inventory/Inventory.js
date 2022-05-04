import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {inventoryID}=useParams();
    return (
        <div>
            <h2>This is inventory {inventoryID}</h2>
        </div>
    );
};

export default Inventory;