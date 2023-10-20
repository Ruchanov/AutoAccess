import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagemain from './components/main/Pagemain';
import Cars from "./components/car-detail/Cars";
import Login from "./components/services/login/Login";
import App from './App';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pagemain />} />
                <Route path="/cars" element={<Cars items={App.defaultProps.items}/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/spare" element={<Cars items={App.defaultProps.spares}/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;


