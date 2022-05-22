import React from 'react';

const ToolInfo = ({ tool }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = tool;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="" className='object-cover h-48 w-99' />
            </figure>
            <div class="card-body">
                <h2 className='text-xl font-bold'>{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>Available Quantity: {AvailableQuantity}</p>
                <p className='font-bold'>Minimum Order :{MinOrderQuantity}</p>
                <h2 className='text-xl font-bold'>Price: ${price}</h2>
                <div class="card-actions">
                    <button className="btn btn-accent">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolInfo;