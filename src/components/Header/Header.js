import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Quiz Tours</h2>
            <div className='header-child'>
                <Link to='/home'>Home</Link>
                <Link to='/statistics'>statistics</Link>
                <Link to='/blog'>blog</Link>
            </div>
        </div>
    );
};

export default Header;