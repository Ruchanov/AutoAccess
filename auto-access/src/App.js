import React from "react";
import Header from "./components/main/Header";
import Pagemain from "./components/main/Pagemain";
import Cars from "./components/car-detail/Cars";

    class App extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                cars:[
                    {
                        id:1,
                        name: "BMW",
                        model: "M5",
                        images: "m5.png",
                        desc: "2021г., 4.4литр, КПП автомат, цвет: синий, пробег: 13000км",
                        category: "passenger cars",
                        price: "$35000"
                    },
                    {
                        id:2,
                        name: "Toyota",
                        model: "Camry",
                        images: "camry.png",
                        desc: "2021г., 2.5литр, КПП автомат, цвет: серый, пробег: 37000км",
                        category: "passenger cars",
                        price: "$15000"
                    },
                    {
                        id:3,
                        name: "Hyundai",
                        model: "Sonata",
                        images: "sonata.png",
                        desc: "2021г., 2.5литр, КПП автомат, цвет: черный, пробег: 20000км",
                        category: "passenger cars",
                        price: "$18000"
                    },
                    {
                        id:4,
                        name: "KIA",
                        model: "K5",
                        images: "k5.png",
                        desc: "2023г., 2.5литр, КПП автомат, цвет: белый, пробег: 2000км",
                        category: "passenger cars",
                        price: "$17000"
                    },
                    {
                        id:5,
                        name: "Chevrolet",
                        model: "Camaro",
                        images: "camaro.png",
                        desc: "2019г., 3.6литр, КПП автомат, цвет: синий, пробег: 49000км",
                        category: "passenger cars",
                        price: "$35000"
                    },
                    {
                        id:6,
                        name: "Toyota",
                        model: "Land Cruiser",
                        images: "lc.png",
                        desc: "2021г., 4.6литр, КПП автомат, цвет: белый, пробег: 53000км",
                        category: "off-roader",
                        price: "$50000"
                    },{
                        id:7,
                        name: "Cadillac",
                        model: "Escalade",
                        images: "escalade.png",
                        desc: "2023г, 6.2литр, КПП автомат, цвет: черный, пробег: 12000км",
                        category: "off-roader",
                        price: "$65000"
                    },{
                        id:8,
                        name: "Lexus",
                        model: "LX570",
                        images: "lx.png",
                        desc: "2016г, 5.7литр, КПП автомат, цвет: белый, пробег: 120000км",
                        category: "off-roader",
                        price: "$65000"
                    },{
                        id:9,
                        name: "Infiniti",
                        model: "QX80",
                        images: "car4.png",
                        desc: "2016г, 5.6литр, КПП автомат, цвет: черный, пробег: 62000км",
                        category: "off-roader",
                        price: "$57000"
                    },
                    {
                        id:10,
                        name: "Mercedes-Benz",
                        model: "ML350",
                        images: "ml350.png",
                        desc: "2007г., 3.5литр, КПП автомат, цвет: черный, пробег: 310000км",
                        category: "off-roader",
                        price: "$43000"
                    },
                ]
            }
        }

        render() {
            return (
                <div className="wrapper">
                    <Pagemain/>
                    <Cars cars={this.state.cars} />
                </div>

            );
        }
    }

    export default App;
