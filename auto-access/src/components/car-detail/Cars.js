import React, { useState } from 'react';
import './Cars.css';

const Cars = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            alert(`Вы искали: ${searchValue}`);
        }
    };

    return (
        <div>
            <div className="top">
                <h2>Auto Access</h2>
            </div>
            <div className="searching">
                <div className="header">
                    <h1>Cars</h1>
                    <input
                        type="search"
                        placeholder="Search"
                        id="input"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={handleSearch}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cars;
