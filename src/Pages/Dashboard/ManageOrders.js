import React from 'react';
import useOrders from '../../hooks/useOrders';

const ManageOrders = () => {
    const [orders, setOrders] = useOrders();

    const handleDelete = itemId => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://polar-lowlands-96437.herokuapp.com/order/${itemId}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== itemId);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Orders</h2>
            {
                orders.map(order => <div
                    key={order._id}
                >

                    <div className='flex h-20'>
                        <h4 className='m-2'>Orders Name: {order.ItemName}</h4>
                        <p className='m-2'>Buyer: {order.BuyerEmail}</p>
                        <p className='m-2'>Order Qty: {order.OrderQuantity} pcs</p>
                        <button onClick={() => handleDelete(order._id)} className='btn btn-xs m-2'>X</button>
                    </div>

                </div>)
            }
        </div>
    );
};

export default ManageOrders;