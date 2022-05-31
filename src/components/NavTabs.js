import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav>Menu
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to='/aboutMe'>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to='/resume'>Resume</Link>
                </li>
                <li className="nav-item">
                    <Link to='/myWork'>My Work</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contactMe'>Contact Me</Link>
                </li>
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;