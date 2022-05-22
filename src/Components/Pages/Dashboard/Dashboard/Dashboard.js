import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-purple-500 font-bold text-center'>My Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'> My orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add review</Link></li>
                    <li><Link to='/dashboard/history'> My History</Link></li>
                    {/* {
                        admin && <>
                            <li><Link to='/dashboard/users'> All Users</Link></li>
                            <li><Link to='/dashboard/doctors'> Add a doctors</Link></li>
                            <li><Link to='/dashboard/manageDoctors'> Manage Doctors</Link></li>
                        </>
                    } */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;