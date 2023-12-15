import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetailPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/cars/${id}/`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error('Error fetching car details:', error));
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div>
            <h1>{car.make} {car.model}</h1>
            {/* Другие детали машины */}
        </div>
    );
};

export default CarDetailPage;
