import Topbar from './components/Topbar'
import Menu from './Menu'
import Footer from './Footer'
import DishesData  from "./DishesData"
import React, { useState } from "react";


export default function App() {
    let dishes = DishesData();
    let [rowCheck, setRowCheck] = useState([false, false, false]);
    let [selectedDishes, setSelectedDishes] = useState([])
    let [selectedDishesQty, setSelectedDishesQty] = useState([])
    let [selectedDishesPrice, setSelectedDishesPrice] = useState([])
    return (
        <>
            <Topbar />
            <Menu 
                dishesData={dishes}
                rowCheck={rowCheck}
                setRowCheck={setRowCheck}
                selectedDishes={selectedDishes}
                setSelectedDishes={setSelectedDishes}
                selectedDishesQty={selectedDishesQty}
                setSelectedDishesQty={setSelectedDishesQty}
                selectedDishesPrice={selectedDishesPrice}
                setSelectedDishesPrice={setSelectedDishesPrice}
            />
            <Footer 
                dishesData={dishes}
                rowCheck={rowCheck}
                setRowCheck={setRowCheck}
                selectedDishes={selectedDishes}
                setSelectedDishes={setSelectedDishes}
            />
        </>
    )
}