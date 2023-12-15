import React, {useEffect, useState} from 'react';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";
import styles from './CarListPage.module.css';
import {Link} from "react-router-dom";

const CarListPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/cars/')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Проверьте данные здесь
                setCars(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className={styles.container}>
            <NavBar></NavBar>
            <h1 className={styles.title}>Список автомобилей</h1>
            <ul className={styles.list}>
                {/*{cars.map(car => (*/}
                {/*    <CarItem key={car.id} car={car}></CarItem>*/}
                {/*))}*/}
                {cars.map(car => (
                    <Link to={`/cars/${car.id}`} key={car.id}>
                        <CarItem key={car.id} car={car}></CarItem>
                    </Link>
                ))}
            </ul>

        </div>)
};

export default CarListPage;