import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: '100vw',
        padding: 'auto',
    }
}


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav style={styles.navStyle}>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
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
            </ul>
        </nav>
    );
}

export default NavTabs;