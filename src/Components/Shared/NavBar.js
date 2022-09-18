import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assests/logo.svg';

const NavBar = () => {
    return (
  <div className="navbar sticky bg-base-100 ">
    <div className="navbar-start">
      <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/alumnus'>Alumnus</NavLink></li>
        <li><NavLink to='/gallary'>Gallary</NavLink></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        <li><NavLink to='/login'>Login | SignUp</NavLink></li>
      </ul>
    </div>
    
    <Link to='/' className="btn btn-ghost normal-case text-xl">
    <img className=' mx-3' src={logo} alt='logo'></img>
        Alumni Association</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/alumnus'>Alumnus</NavLink></li>
        <li><NavLink to='/gallary'>Gallary</NavLink></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        <li><NavLink to='/login'>Login | SignUp</NavLink></li>
    </ul>
  </div>
  
</div>
    );
};

export default NavBar;