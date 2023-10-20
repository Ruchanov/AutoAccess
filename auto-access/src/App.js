import React from "react";
import Header from "./components/main/Header";
import Pagemain from "./components/main/Pagemain";
import Cars from "./components/car-detail/Cars";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            spares:[]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Pagemain/>
                {/* <Cars items={this.state.items} /> */}
            </div>
        );
    }
}
App.defaultProps = {
    items: [{
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
        images: "sonata.jpg",
        desc: "2021г., 2.5литр, КПП автомат, цвет: черный, пробег: 20000км",
        category: "passenger cars",
        price: "$18000"
    },
    {
        id:4,
        name: "KIA",
        model: "K5",
        images: "k5.jpg",
        desc: "2023г., 2.5литр, КПП автомат, цвет: белый, пробег: 2000км",
        category: "passenger cars",
        price: "$17000"
    },
    {
        id:5,
        name: "Chevrolet",
        model: "Camaro",
        images: "camaro.jpg",
        desc: "2019г., 3.6литр, КПП автомат, цвет: синий, пробег: 49000км",
        category: "passenger cars",
        price: "$35000"
    },
    {
        id:6,
        name: "Toyota",
        model: "Land Cruiser",
        images: "lc.jpg",
        desc: "2021г., 4.6литр, КПП автомат, цвет: белый, пробег: 53000км",
        category: "off-roader",
        price: "$50000"
    },{
        id:7,
        name: "Cadillac",
        model: "Escalade",
        images: "escallade.png",
        desc: "2023г, 6.2литр, КПП автомат, цвет: черный, пробег: 12000км",
        category: "off-roader",
        price: "$65000"
    },{
        id:8,
        name: "Lexus",
        model: "LX570",
        images: "lx570.jpg",
        desc: "2016г, 5.7литр, КПП автомат, цвет: белый, пробег: 120000км",
        category: "off-roader",
        price: "$65000"
    },{
        id:9,
        name: "Infiniti",
        model: "QX80",
        images: "car4.webp",
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
    },],
    spares:[
        {
            id:1,
            name: "Yokohama",
            model:"DB E70B",
            image: "db.jpg",
            desc: "сезонность: зимние, диаметр диска: 17, индекс максимальной скорости: T (190 км/ч)",
            price: "$2000"
        },
        {
            id:2,
            name: "MICHELIN ",
            model:"X-Ice North",
            image: "michelin.jpg",
            desc: "сезонность: зимние, диаметр диска: 16, индекс максимальной скорости: T (190 км/ч)",
            price: "$2800"
        },
        {
            id:3,
            name: "Bars",
            model:"Silver",
            image: "akk.jpg",
            desc: "назначение: для легковых автомобилей,емкость: 75.0 Ач, полярность: обратная, напряжение: 12 В",
            price: "$1500"
        },
        {
            id:4,
            name: "Motor",
            model:"Electric",
            image: "motor.jpg",
            desc: "тип: бензиновый, номер OEM: 21214100026032, марка автомобиля: Lada",
            price: "$8600"
        },
        {
            id:5,
            name: "Mitsubishi",
            model:"4A91",
            image: "motor2.jpg",
            desc: "тип: бензиновый, номер OEM: 4A91, марка автомобиля: Mitsubishi",
            price: "$8000"
        },
        {
            id:6,
            name: "Tomasetto",
            model:"AT-09 Nordic",
            image: "reductor.jpg",
            desc: "тип: редуктор, артикул производителя: AT-09 Nordic",
            price: "$980"
        },
        {
            id:7,
            name: "Lovato",
            model:"238000081",
            image: "lovato.jpg",
            desc: "тип: газовая форсунка, артикул производителя: 238000081, вес: 1.0 кг",
            price: "$1500"
        },
        {
            id:8,
            name: "Tomasetto",
            model:"MV4000",
            image: "mv.jpg",
            desc: "тип: мультиклапан, артикул производителя: MV4000, вес: 0.03 кг",
            price: "$1200"
        },
        {
            id:9,
            name: "Felix Carbox",
            model:"red",
            image: "red.jpg",
            desc: "назначение: для легкового транспорта, тип: карбоксилатный, концентрат: Нет,объем упаковки: 10.0 л",
            price: "$800"
        }
    
    ]
};
export default App;