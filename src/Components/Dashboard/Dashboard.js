import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=' my-12 container mx-auto'>
            <div className="drawer drawer-mobile my-6">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h1 className=' lg:text-5xl text-center md:text-2xl font-bold text-primary'>Welcome to your Dashboard</h1>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link ></li>
                        <li><Link to='/dashboard/update-profile'>Update Profile</Link ></li>
                        <li><Link to='/dashboard/all-users'>All Users</Link ></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;