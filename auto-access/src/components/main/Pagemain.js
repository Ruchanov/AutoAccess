// Pagemain.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
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
            </div>
            <div className="image-container">
                <img src={images[currentImage]} alt={`Image ${currentImage}`} />
            </div>
            <footer>
                <div className="last">
                    <ol>
                        <li>О компании «Auto Access»</li>
                        <li><a href="#">Написать в Службу заботы</a></li>
                        <li><a href="#">Работа в «Auto Access»</a></li>
                        <li><a href="#">Карта сайта</a></li>
                        <li><a href="#">Рекламодателям</a></li>
                        <li><a href="#">Правила размещения объявлений</a></li>
                        <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Скачать приложение</a></li>
                        <li><a href="#">Мобильная версия сайта</a></li>
                        <li><a href="#">Следите за нашими новостями</a></li>
                        <li><a href="#">Instagram YouTube Telegram TikTok VK Facebook</a></li>
                    </ol>
                </div>
            </footer>
        </div>
    );
}
