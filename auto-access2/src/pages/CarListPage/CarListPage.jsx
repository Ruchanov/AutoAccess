import React, {useEffect, useState} from 'react';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";
import styles from './CarListPage.module.css';
import {Link} from "react-router-dom";

const CarListPage = () => {
    const [cars, setCars] = useState([]);
    const [filterParams, setFilterParams] = useState({
        year: '',
        marka: '',
        model: '',
        min_price: '',
        max_price: '',
        min_mileage: '',
        max_mileage: '',
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(filterParams).toString();
        fetch(`http://127.0.0.1:8000/cars/?${queryParams}`)
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [filterParams]);

    const handleFilterChange = (e) => {
        setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.title}>Список автомобилей</h1>
            <div>
                <input type="text" name="year" placeholder="Год" onChange={handleFilterChange} />
                {/* Добавьте другие поля фильтрации */}
            </div>
            <ul className={styles.list}>
                {cars.map(car => (
                    <Link to={`/cars/${car.id}`} key={car.id}>
                        <CarItem car={car} />
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default CarListPage;
