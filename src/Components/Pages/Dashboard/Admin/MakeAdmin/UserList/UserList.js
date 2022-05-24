import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../../Shared/Loading/Loading';
import MakeAdmin from '../MakeAdmin';




const UserList = () => {


    const { data: users, isLoading, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='text-center text-xl mt-5 mb-5 uppercase'>Make Admin {users.length}</h2>

                <div className="overflow-x-auto">

                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Make Admin</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                users.map((user, index) =>
                                    <MakeAdmin
                                        key={user._id}
                                        user={user}
                                        index={index}
                                        refetch={refetch}
                                    ></MakeAdmin>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default UserList;