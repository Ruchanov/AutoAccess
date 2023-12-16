import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import CarListPage from "./pages/CarListPage/CarListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";
import CarCreatingPage from "./pages/CarCreatingPage/CarCreatingPage";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cars" element={<CarListPage />} />
                    <Route path="/cars/:id" element={<CarDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/createCar" element={<CarCreatingPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
