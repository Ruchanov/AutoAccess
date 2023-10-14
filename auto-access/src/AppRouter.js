import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagemain from './components/main/Pagemain';
import Cars from './components/car-detail/Cars';
import Login from "./components/services/login/Login";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pagemain />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

