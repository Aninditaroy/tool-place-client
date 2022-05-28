import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary text-center my-10 '><span className='border-b-2 border-orange-200'>Dashboard</span></h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-gray-100 shadow-xl rounded m-0 lg:m-5">
                    {
                        !admin &&
                        <>
                            <h2 className='text-2xl font-bold text-primary text-center my-10 '><span className='border-b-2 border-orange-200'>User</span></h2>
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/review'>Add a Review</Link></li>
                            <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        </>
                    }
                    {
                        admin &&
                        <>
                            <h2 className='text-2xl font-bold text-primary text-center my-10 '><span className='border-b-2 border-orange-200'>Admin</span></h2>
                            <li><Link to='/dashboard' >My Profile</Link></li>
                            <li><Link to='/dashboard/users' >All Users</Link></li>
                            <li><Link to='/dashboard/manageorders' >Manage All Orders</Link></li>
                            <li><Link to='/dashboard/managetool' >Manage Tool</Link></li>
                            <li><Link to='/dashboard/addtool' >Add a tool</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;