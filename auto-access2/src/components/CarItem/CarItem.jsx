import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from './CarItem.module.css';

const CarItem = ({ car }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className={styles.carItem}>
            {car.image && (
                <img className={styles.carImage} src={car.image} alt={`${car.make} ${car.model}`} />
            )}
            <div className={styles.carInfo}>
                <div className={styles.header}>
                    <h2 className={styles.marka}>{car.marka} {car.model}</h2>
                    <span
                        className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`}
                        onClick={handleLikeClick}
                    >
                        <FaHeart />
                    </span>
                </div>
                <div className={styles.details}>
                    <p>{car.year}/{car.mileage}km/{car.body_type}/{car.transmission}</p>
                </div>
                <div className={styles.footer}>
                    <p>{car.price} ₸</p>
                </div>
            </div>
        </div>
    );
};

export default CarItem;