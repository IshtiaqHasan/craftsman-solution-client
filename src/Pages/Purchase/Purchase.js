import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, useToast } from 'react-toastify';
import Loading from '../Shared/Loading';


const Purchase = ({ items, setItems }) => {
    const { _id, name, price, description, img, AvailableQuantity, MinOrderQuantity } = items;
    const [user, loading, error] = useAuthState(auth);

    const handleBuy = event => {
        event.preventDefault();
        let orderQTY = event.target.order.value;
        let totalCost = price * orderQTY;
        event.target.cost.value = totalCost;
        const order = {
            itemId: _id,
            ItemName: name,
            OrderQuantity: event.target.order.value,
            price,
            BuyerName: user.displayName,
            BuyerEmail: user.email,
            Contact: event.target.phone.value,
            Address: event.target.address.value,
            totalCost
        }
        if (loading) {
            <Loading></Loading>
        }

        if (orderQTY > AvailableQuantity || orderQTY < MinOrderQuantity) {
            toast.error('Please Order Leass than Available Qty & Higher Than Minimun Order Quantity')
        }

        else {
            fetch('https://polar-lowlands-96437.herokuapp.com/order', {
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
                        <input type="text" name='order' id="quantity" placeholder="Order QTY" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='cost' id="total" value="" placeholder="Total cost" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" name='submit' id='submitButton' value="BUY" placeholder="Type here" className="btn btn-accent w-full max-w-xs" />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;