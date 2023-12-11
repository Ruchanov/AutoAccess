import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagemain from './components/main/Pagemain';
import Cars from "./components/car-detail/Cars";
import Login from "./components/services/login/Login";
import App from './App';
import Spares from './components/spare_parts/Spares';
import Korzina from './components/korzina/Korzina';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagemain />} />
        <Route path="/cars" element={<Cars items={App.defaultProps.items} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/korzina"
          element={<Korzina />} // Корзине можно передать данные через пропсы внутри компонента
        />
        <Route path="/spare" element={<Spares items={this.state.cartItems} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;


