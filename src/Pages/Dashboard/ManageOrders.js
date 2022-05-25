import React from 'react';
import useOrders from '../../hooks/useOrders';

const ManageOrders = () => {
    const [orders] = useOrders();
    return (
        <div>
            <h2>Manage Orders</h2>
            {
                orders.map(order => <div
                    key={order._id}
                >
                    <h4>{order.ItemName}</h4>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;