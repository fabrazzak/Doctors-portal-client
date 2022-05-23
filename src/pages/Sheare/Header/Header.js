import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

import Loading from '../../Sheared/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/login')
        localStorage.removeItem("accessToken");

    };
    if (loading) {
        return <Loading></Loading>
    }
    const menuItem = <>
        <li className='text-xl font-bold'><Link to='/'>Home</Link></li>
        <li className='text-xl font-bold'><Link to='about'>About</Link></li>
        <li className='text-xl font-bold'><Link to='appointment'>Appointment</Link></li>
        <li className='text-xl font-bold'><Link to='dashboard/review'>Review</Link></li>
        <li className='text-xl font-bold'><Link to='contact'>Contact Us</Link></li>
        {
            user && <li className='text-xl font-bold'><Link to='dashboard'>Dashboard</Link></li>
        }
        <li className='text-xl font-bold'>
            {user ? <button className="btn btn-ghost lg:text-lg  font-bold" onClick={logout} >Log out</button> :
                <Link to='login'>Login</Link>}</li>
        <li className='text-xl font-bold'>
            {user?.photoURL ?
                <button className="btn btn-ghost text-xl font-bold . "><img className='rounded-full .. w-12 lg:mt-[-10px]' src={user?.photoURL} alt="" /></button> : 
                <button className={`btn btn-ghost text-xl font-bold ${user && "btn-active"}`} >{user?.displayName}</button> }
        </li>

    </>

    return (
        <div className="navbar bg-base-100 container mx-auto  sticky top-0 z-10 ...">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}

                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case font-bold text-2xl" to="/">Doctor Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {
                        menuItem
                    }

                </ul>
            </div>
            <div className='navbar-end '>
                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Header;