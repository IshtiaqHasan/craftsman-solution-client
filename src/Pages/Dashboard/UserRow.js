import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const UserRow = ({ user, index, refetch }) => {

    const [admin] = useAdmin(user);
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://polar-lowlands-96437.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Can't make an admin")
                }
                res.json()
            })
            .then(data => {
                refetch();
                toast.success(`Successfully made an admin`);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
            </td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;