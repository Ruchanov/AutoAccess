import React from 'react';
import './MainPage.css';
import logo from './logo.png'
import logo2_1 from './logo2_1.png'
const MainPage = () => {
    return (
        <div className="main-page">
            <nav className="top-nav">
                <img className="logo" src={logo} alt="Luxury Car"/>
                <div className="nav-links">
                    <a href="#!">Cars</a>
                    <a href="#!">Spare Parts</a>
                    <a href="#!">Repairs & Services</a>
                    <a href="#!">About</a>
                    <a href="#!">Login</a>
                </div>
            </nav>
            <header className="hero">
                <div className="hero-text">
                    <h1>AUTO ACCESS</h1>
                    <p>WORLD OF CARS</p>
                    <p>FIND YOUR DREAM CAR HERE</p>
                    <div className="hero-buttons">
                        <button>Buy Car</button>
                        <button>List Your Car</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={logo2_1} alt="Luxury Car"/>
                </div>
            </header>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} AutoAccess. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;
