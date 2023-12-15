// NavBar.js
import React from 'react';
import styles from './NavBar.module.css'; // Импорт модуля CSS
import logo from './logo.png';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.topNav}>
            <img className={styles.logo} src={logo} alt="Luxury Car"/>
            <div className={styles.navLinks}>
                <Link to="/cars">Cars</Link>
                <a href="#!">Spare Parts</a>
                <a href="#!">Repairs & Services</a>
                <a href="#!">About</a>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default NavBar;
