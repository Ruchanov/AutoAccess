// Pagemain.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Импортируйте компонент Link
import Header from "./Header";
import './Pagemain.css'

export default function Pagemain() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/car2.png",
        "/images/car1.png",
        "/images/car3.png",
        "/images/car4.webp",
    ];

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="page-container">
            <Header />
            <div className="explanationOfCompany">
                <img src="/images/logo.jpeg" alt="Company Logo" />
                <h1>Driving the Path to Happiness</h1>
                <p>Search, Choose, Drive</p>
                <div>
                    <Link to="/login">
                        <button className="custom-login-button">Login</button>
                    </Link>
                </div>
            </div>
            <div className="image-container">
                <img src={images[currentImage]} alt={`Image ${currentImage}`} />
            </div>
        </div>
    );
}
