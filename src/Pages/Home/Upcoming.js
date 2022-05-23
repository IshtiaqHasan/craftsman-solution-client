import React from 'react';

const Upcoming = ({ tool }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = tool;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="" className='object-cover h-48 w-99' />
            </figure>
            <div className="card-body">
                <h2 className='text-xl font-bold'>{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>First Production Quantity: {AvailableQuantity}</p>
                <p className='font-bold'>Minimum Pre-Order Quantity: {MinOrderQuantity}</p>
                <h2 className='text-xl font-bold'>Approx.Price: ${price}</h2>
                <div className="card-actions">
                    <button className="btn btn-accent">Pre-Order</button>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;