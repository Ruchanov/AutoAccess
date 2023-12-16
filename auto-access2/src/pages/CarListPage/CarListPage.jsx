import React, {useEffect, useState} from 'react';
import CarItem from "../../components/CarItem/CarItem";
import NavBar from "../../components/NavBar/NavBar";
import styles from './CarListPage.module.css';
import {Link} from "react-router-dom";
import FilterForm from "../../components/FilterForm/FilterForm";
import SearchForm from "../../components/SearchForm/SearchForm";

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
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };
    useEffect(() => {
        const queryParams = new URLSearchParams(filterParams).toString();
        fetch(`http://127.0.0.1:8000/cars/?${queryParams}&search=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [filterParams, searchQuery]);

    const handleFilterChange = (e) => {
        setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.searchAndFilterContainer}>
                <div className={styles.searchForm}>
                    <SearchForm setSearchQuery={setSearchQuery} />
                </div>
                <button className={styles.filterButton} onClick={toggleFilter}>
                    {isFilterVisible ? 'Скрыть фильтры' : 'Показать фильтры'}
                </button>
            </div>
            {isFilterVisible && (
                <FilterForm
                    filterParams={filterParams}
                    setFilterParams={setFilterParams}
                    applyFilter={() => {
                        setFilterParams(filterParams);
                        toggleFilter(); // Закрыть фильтр после применения
                    }}
                />
            )}
            <h1 className={styles.title}>Список автомобилей</h1>
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
