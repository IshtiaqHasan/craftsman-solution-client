import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = ({ items, setItems }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = items;
    const [user, loading, error] = useAuthState(auth);

    const handleBuy = event => {
        event.preventDefault();
        const order = {
            itemId: _id,
            ItemName: name,
            Order_Quantity: event.target.order.value,
            BuyerName: user.displayName,
            BuyerEmail: user.email,
            Contact: event.target.phone.value,
            Address: event.target.address.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast(`Hello ${user.displayName} We Have Received Your Order`)
            })
    }
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} className="h-20 w-20" alt="" />
                    <h3 className="font-bold text-lg text-accent">{name}</h3>
                    <p >Quantity Available: {AvailableQuantity}pcs</p>
                    <p >Minimum Order: {MinOrderQuantity}pcs</p>
                    <h3 className="font-bold text-lg text-accent">Price: ${price}</h3>
                    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-2'>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='order' placeholder="Order QTY" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="BUY" placeholder="Type here" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;