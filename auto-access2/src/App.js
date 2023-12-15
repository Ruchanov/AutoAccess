import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import CarListPage from "./pages/CarListPage/CarListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/cars" element={<CarListPage />} />
                    <Route path="/cars/:id" element={<CarDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
