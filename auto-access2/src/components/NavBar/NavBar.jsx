// NavBar.js
import React from 'react';
import styles from './NavBar.module.css'; // Импорт модуля CSS
import logo from './logo.png';

const NavBar = () => {
    return (
        <nav className={styles.topNav}>
            <img className={styles.logo} src={logo} alt="Luxury Car"/>
            <div className={styles.navLinks}>
                <a href="#!">Cars</a>
                <a href="#!">Spare Parts</a>
                <a href="#!">Repairs & Services</a>
                <a href="#!">About</a>
                <a href="#!">Login</a>
            </div>
        </nav>
    );
};

export default NavBar;
