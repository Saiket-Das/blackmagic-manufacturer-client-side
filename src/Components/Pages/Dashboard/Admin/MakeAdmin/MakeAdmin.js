import React from 'react';
import { toast } from 'react-toastify';



const MakeAdmin = ({ user, index, refetch }) => {

    const { email, role } = user
    const handleMakeAdmin = () => {
        fetch(`https://dry-caverns-08201.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Role converted User to Admin')
                    refetch()
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>

            <td>
                {role && <label
                    className="text-secondary">
                    Already Admin
                </label>}

                {
                    !role && <button
                        onClick={handleMakeAdmin}
                        className="btn btn-outline btn-xs btn-secondary">
                        Admin
                    </button>
                }
            </td>

            <td>
                <button
                    className="btn btn-xs btn-secondary">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MakeAdmin;