import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagemain from './components/main/Pagemain';
import Cars from './components/car-detail/Cars';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pagemain />} />
                <Route path="/cars" element={<Cars />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;


