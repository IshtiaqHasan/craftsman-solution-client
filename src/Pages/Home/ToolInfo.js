import React from 'react';
import { Link, useNavigate, useHistory } from 'react-router-dom';

const ToolInfo = ({ tool }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = tool;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="" className='object-cover h-48 w-99' />
            </figure>
            <div className="card-body">
                <h2 className='text-xl font-bold'>{name}</h2>
                <p>{description}</p>
                <p className='font-bold'>Available Quantity: {AvailableQuantity}</p>
                <p className='font-bold'>Minimum Order Quantity: {MinOrderQuantity}</p>
                <h2 className='text-xl font-bold'>Price: ${price}</h2>
                <div className="card-actions">
                    <Link
                        to="allItems"
                        className="btn btn-accent text-white uppercase">Order Now</Link>
                </div>
            </div>
        </div >
    );
};

export default ToolInfo;