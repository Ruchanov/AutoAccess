import React from 'react';
import styles from './NavBar.module.css';
import logo from './logo.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const isLoggedIn = localStorage.getItem('access_token');

    return (
        <nav className={styles.topNav}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="AutoAccess Logo"/>
            </Link>
            <div className={styles.navLinks}>
                <Link to="/cars">Cars</Link>
                <a href="#!">Spare Parts</a>
                <a href="#!">Repairs & Services</a>
                <a href="#!">About</a>
                {isLoggedIn ? (
                    <Link to="/profile">My Profile</Link>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
