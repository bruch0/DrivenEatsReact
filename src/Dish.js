import Counter from "./Counter";
import React, { useState } from "react";

export default function Dish(props) {
    const
    { 
        dishClass,
        dishImg,
        dishAlt,
        dishTitle,
        dishDescription,
        dishPrice,
        rowCheck,
        setRowCheck,
        selectedDishes,
        setSelectedDishes,
        selectedDishesQty,
        setSelectedDishesQty,
        selectedDishesPrice,
        setSelectedDishesPrice,
        access
    } = props;

    let [isSelected, setIsSelected] = useState('');
    let [value, setValue] = useState(1);

    function selectDish() {
        setIsSelected(' select')
        setSelectedDishes([...selectedDishes, dishTitle]);
        setSelectedDishesQty([...selectedDishesQty, 1]);
        setSelectedDishesPrice([...selectedDishesQty, dishPrice])
        setRowCheck(checkRow(true, access));
    }

    function filterDish(unselectedDish) {
        setSelectedDishes(selectedDishes.filter(function(e) {
            if (e !== unselectedDish){
                return true
            }
        }))
    }

    function evaluate(num){
        if (value + num === 0) {
            setIsSelected('');
            setRowCheck(checkRow(false, access));
            filterDish(dishTitle);
        }
        else {
            setValue(value + num);
            let index = selectedDishes.findIndex(dish => dish === dishTitle);
            let auxArray = [...selectedDishesQty];
            auxArray[index] = value + num;
            setSelectedDishesQty (auxArray);
            console.log(selectedDishesQty);
        }
    }

    function checkRow(value ,key) {
        let newCheck = [...rowCheck];
        newCheck[key] = value;
        return newCheck
    }
    
    return (
        <button type="button" className={dishClass + isSelected} onClick={() => selectDish()}>
            <div className="dish-container">
                <img src={dishImg} alt={dishAlt} />
                <div className="dish-title">
                    {dishTitle}
                </div>
                <div className="description">
                    {dishDescription}
                </div>
                <div className="price">
                    <div>R$ <span>{dishPrice}</span></div>
                    <Counter func={evaluate} value={value}/>
                </div>
            </div>
        </button>
    )
}
