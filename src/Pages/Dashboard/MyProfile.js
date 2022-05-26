import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleUser = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value
    }
    return (
        <div className=''>
            <h2 className="font-bold text-lg text-accent">My Profile</h2>
            <h4>Name:  {user?.displayName}</h4>
            <h4>Email: {user?.email}</h4>
            <div className='text-center'>
                <form onSubmit={handleUser} className='grid grid-cols-1 gap-2 '>
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <textarea type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" id='submitButton' value="BUY" placeholder="Type here" className="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;