import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://polar-lowlands-96437.herokuapp.com/order?BuyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Items Name</th>
                            <th>Order Quantity/ set</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.BuyerName}</td>
                                    <td>{order.ItemName}</td>
                                    <td>{order.OrderQuantity}</td>
                                    <td>{order.totalCost}</td>
                                    <td>
                                        {(order.totalCost && !order.paid) &&
                                            < Link to={`/dashboard/payment/${order._id}`} >
                                                <button className='btn btn-xs btn-accent'>Pay</button>
                                            </Link>}
                                        {(order.totalCost && order.paid) &&
                                            <span className='text-success'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;