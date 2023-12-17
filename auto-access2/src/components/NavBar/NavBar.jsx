// NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './logo.png';

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(!!localStorage.getItem('access_token'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_id');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav className={styles.topNav}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="AutoAccess Logo" />
            </Link>
            <div className={styles.navLinks}>
                <Link to="/cars">Cars</Link>
                <a href="#!">Spare Parts</a>
                <Link to='/likes'>Likes</Link>
                <a href="#!">About</a>
                {isLoggedIn ? (
                    <>
                        <Link to="/profile">My Profile</Link>
                        <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
