import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageUserControl = () => {
    const [user, loading] = useAuthState(auth)
    const dashboardNavItem = (
        <React.Fragment>
            <li className='mb-2'>
                <Link to="/dashboard">My Profile</Link>
            </li>
            <li className='mb-2'>
                <Link to="/dashboard/Manage-blogs">Blogs</Link>
            </li>
            <li className='mb-2'>
                <Link to="/dashboard/Manage-comment">Comment</Link>
            </li>
        </React.Fragment>
    );

    return (
        <div className="min-h-screen">
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div className="drawer-content">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-accent my-4 font-semibold text-xl">
                            Welcome to Dashboard Mr{" "}
                            <span className="text-teal-500">{user?.displayName}</span>
                        </span>
                        <span>
                            <label
                                htmlFor="dashboard-drawer"
                                className="btn btn-sm btn-primary drawer-button lg:hidden"
                            >
                                Open drawer
                            </label>
                        </span>
                    </div>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {dashboardNavItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageUserControl;