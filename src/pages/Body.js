import Topbar from '../components/Topbar'
import Menu from '../menu/Menu'
import Footer from '../components/Footer'
import DishesData  from "../data/DishesData"
import React, { useState } from "react";

export default function Body() {
    let dishes = DishesData();
    let [rowCheck, setRowCheck] = useState([false, false, false]);
    let [selectedDishes, setSelectedDishes] = useState([])
    let [selectedDishesQty, setSelectedDishesQty] = useState([])
    let [selectedDishesPrice, setSelectedDishesPrice] = useState([])
    let [selectedDishesType, setSelectedDishesType] = useState([])
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
                selectedDishesType={selectedDishesType}
                setSelectedDishesType={setSelectedDishesType}
            />
            <Footer 
                rowCheck={rowCheck}
                selectedDishes={selectedDishes}
                selectedDishesQty={selectedDishesQty}
                selectedDishesPrice={selectedDishesPrice}
                selectedDishesType={selectedDishesType}
            />
        </>
    )
}