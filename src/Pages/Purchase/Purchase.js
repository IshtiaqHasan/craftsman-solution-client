import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';


const Purchase = ({ items, setItems }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = items;
    const handleBuy = event => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name)
    }
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} className="h-20 w-20" alt="" />
                    <h3 className="font-bold text-lg text-accent">{name}</h3>
                    <p >Quantity Available: {AvailableQuantity}pcs</p>
                    <p >Minimum Order: {MinOrderQuantity}pcs</p>
                    <h3 className="font-bold text-lg text-accent">Price: ${price}</h3>
                    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-2'>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="BUY" placeholder="Type here" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;