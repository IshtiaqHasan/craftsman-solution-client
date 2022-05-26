import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3L33B4fS6b0mznQhYgZXefiZLX4k0We29XyGAe8eSs1vlom8hVJWdrjKzqVyv6G1KmhkGWyeGAtEdE7gTl5k3E000doKXetV');

const Payment = () => {
    const { id } = useParams();
    const url = `https://polar-lowlands-96437.herokuapp.com/order/${id}`;
    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div class="m-2 card w-50 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className='text-success'>Hello, {data.BuyerName}!</p>
                    <h2 class="card-title">Please Pay for <span className='text-xl font-bold text-accent'>{data.ItemName}</span></h2>
                    <p>Please Pay: ${data.totalCost}</p>


                </div>
            </div>
            <div class=" m-2 card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;