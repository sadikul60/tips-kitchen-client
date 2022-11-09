import React, { useContext } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexs/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.uid ? 
            <>
                <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
                <li className='font-semibold'><Link to='/add_services'>Add Services</Link></li>
                <li className='font-semibold'><button onClick={handleLogOut}>Log Out</button></li>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="w-full navbar bg-slate-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52 text-black">
                    {menuItems}
                </ul>
                </div>
                <h1  className="normal-case text-2xl font-bold">
                <span className='text-3xl text-orange-600'>T</span>ips<span className='text-3xl text-orange-600'>K</span>itchen
                </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ?
                    <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />
                    :
                    <HiUserCircle className='w-16 h-16 rounded-full'></HiUserCircle>
                }
            </div>
</div>
    );
};

export default Header;