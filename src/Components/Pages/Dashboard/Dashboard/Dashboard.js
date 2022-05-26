import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useVerifyAdmin from '../../../Hooks/userVerifyAdmin';



const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useVerifyAdmin(user)


    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='mt-5 text-3xl text-secondary font-bold text-center uppercase'>My Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">


                    {/* For Both ( USER & ADMIN ) */}
                    <li><Link to='/dashboard'> Edit Pofile</Link></li>

                    {/* <!-- For USER --> */}
                    {!admin && <>
                        <li><Link to='/dashboard/myOrder'> My orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add review</Link></li></>
                    }


                    {/* <!-- For ADMIN --> */}
                    {
                        admin && <>
                            <li><Link to='/dashboard/manageOrder'> Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Product</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;