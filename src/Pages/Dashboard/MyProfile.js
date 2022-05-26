import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='text-center'>
            <h2 className="font-bold text-lg text-accent">My Profile</h2>
            <h4>Your Name:  {user?.displayName}</h4>
            <h4>Your Email: {user?.email}</h4>
        </div>
    );
};

export default MyProfile;