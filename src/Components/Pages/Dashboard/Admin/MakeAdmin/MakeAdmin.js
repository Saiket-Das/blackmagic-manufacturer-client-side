import React from 'react';



const MakeAdmin = ({ user, index, refetch }) => {
    const { email } = user
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>

            <td>
                <button
                    className="btn btn-outline btn-xs btn-secondary">
                    Admin
                </button>
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