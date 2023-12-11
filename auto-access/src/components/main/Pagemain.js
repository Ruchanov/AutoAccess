import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Pagemain.css";

export default function Pagemain() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

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

    const handleSupportClick = () => {
        if (isFooterVisible === true) {
            setIsFooterVisible(false);
        } else {
            setIsFooterVisible(true);
        }
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="page">
            <Header handleSupportClick={handleSupportClick} /> {/* Передаем обработчик в Header */}
            <div class="page-container">
                <div className="explanationOfCompany">
                    <img src="/images/logo.jpeg" alt="Company Logo" />
                    <h1>Driving the Path to Happiness</h1>
                    <p>Search, Choose, Drive</p>
                </div>
                <div className="image-container">
                    <img src={images[currentImage]} alt={`Image ${currentImage}`} />
                </div>
            </div>
            <footer style={{ display: isFooterVisible ? "block" : "none" }}>
                <div className="footer-row">
                    <ul>
                        <li>О компании «Auto Access»</li>
                        <li><a href="https://wa.me/7776887839">Написать в Службу заботы</a></li>
                        <li><a href="#">Работа в «Auto Access»</a></li>
                    </ul>
                </div>
                <div className="footer-row">
                    <ul>
                        <li><a href="#">Карта сайта</a></li>
                        <li><a href="#">Рекламодателям</a></li>
                        <li><a href="#">Правила размещения объявлений</a></li>
                    </ul>
                </div>
                <div className="footer-row">
                    <ul>
                        <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Скачать приложение</a></li>
                        <li><a href="#">Мобильная версия сайта</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
