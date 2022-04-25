import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav justify-content-center'>
            <nav className='text-3xl flex justify-center  p-4 nav-item'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Review</Link>
                <Link to='/dashboard' >Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;