import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import auth from '../../firebase.init';
import Loading from './Loading';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    if (loading) {
        return <Loading />
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        {/* <li><Link to='/myportfolio'>My Portfolio</Link></li>
        <li><Link to='/blog'>Blog</Link></li> */}
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{
            user ?
                <span>
                    <button onClick={logout} className="btn btn-ghost">Log Out
                    </button>
                    <p className='badge badge-lg badge-primary font-semibold'>{user.displayName}</p>
                </span>

                :
                <Link to='/login'>Login</Link>
        }</li>
    </>
    return (
        <div className=' lg:mx-auto'>
            <div className="navbar w-full bg-slate-100 font-semibold mb-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="lg:ml-24" to='/'><img src={logo} alt="" className='w-80' /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;