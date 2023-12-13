import './App.css';
// import {useState} from "react";
import MainPage from "./pages/MainPage/MainPage";
import CarListPage from "./pages/CarListPage/CarListPage";

function App() {
  // const[cars, setCars] = useState([
  //   {id: 1, name: "mers", body: "Description", price: 21},
  //   {id: 2, name: "bmw", body: "aasad", price: 21},
  //   {id: 3, name: "toyota", body: "adsdsa", price: 21},
  //   {id: 4, name: "lada", body: "vcx", price: 21},
  // ])
  return (
    <div className="App">
      {/*<MainPage></MainPage>*/}
        <CarListPage></CarListPage>
    </div>
  );
}

export default App;
