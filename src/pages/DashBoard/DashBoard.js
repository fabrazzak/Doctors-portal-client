import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user]=useAuthState(auth);
    
    const [admin]=useAdmin(user);

    console.log(admin)
    return (
        <div div className="drawer drawer-mobile container mx-auto relative" >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-zinc-200	">
                {/* <!-- Page content here --> */}
                <div>
                    <h1 className='text-4xl mt-6 ml-6 text-secondary font-bold'>Welcome to Dash Board</h1>
                    <Outlet></Outlet>
                </div>


            </div>
            <div className="drawer-side  border-r-2  sticky  ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='text-xl font-bold' to="/dashboard">Appointment</Link></li>
                    <li><Link className='text-xl font-bold' to="/dashboard/review">Review</Link></li>
                    {admin && <li><Link className='text-xl font-bold' to="/dashboard/users">All User</Link></li>}
                </ul>

            </div>
        </div >
    );
};

export default DashBoard;