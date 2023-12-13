import React from 'react';
import styles from './CarItem.module.css';

const CarItem = ({ car }) => {
    return (
        <li className={styles.carItem}>
            {car.image && (
                <img className={styles.carImage} src={car.image} alt={`${car.make} ${car.model}`} />
            )}
            <div className={styles.carInfo}>
                <strong>{car.marka} {car.model}</strong>
                <p>{car.year}/{car.mileage}km/{car.body_type}/{car.transmission}/{car.description}</p>
            </div>
        </li>
    );
};

export default CarItem;
