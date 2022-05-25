import React from 'react';

const ManageOrder = ({ order }) => {
    const { ItemName, BuyerEmail, Order_Quantity } = order;
    return (
        <div>
            <h2>{ItemName}</h2>
        </div>
    );
};

export default ManageOrder;