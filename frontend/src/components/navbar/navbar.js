import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import logo from './logo.png'; // Import the logo file

function Navbar() {
  return (
    <nav className="navbar-container bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-b-lg mb-8">
      <div className="navbar-main-con h-20 flex justify-between items-center px-8">
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
          <span className="text-white text-2xl font-bold tracking-wide">Auto Finder</span> {/* Updated text styles */}
        </div>
        <div className="nav-links flex justify-center items-center space-x-8">
          <Link to='/' className='nav-bar-link-style text-white hover:text-gray-300'>
            Products
          </Link>
          <Link to='/shop-page' className='nav-bar-link-style text-white hover:text-gray-300'>
            Shops
          </Link>
          <Link to='/about' className='nav-bar-link-style text-white hover:text-gray-300'>
            About
          </Link>
        </div>
        <div className="user-icon">
          <FaUserAlt size={25} color='#fff' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
