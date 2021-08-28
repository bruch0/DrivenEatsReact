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
        selectedDishesType,
        setSelectedDishesType,
        access
    } = props;
    let [isSelected, setIsSelected] = useState('');
    let [value, setValue] = useState(1);

    function selectDish() {
        let contains =  selectedDishes.find(function (e) {
            if (e === dishTitle) {
                return true    
            }
        })
        
        if (contains === undefined) {
            setIsSelected(' select')
            setSelectedDishes([...selectedDishes, dishTitle]);
            setSelectedDishesQty([...selectedDishesQty, 1]);
            setSelectedDishesPrice([...selectedDishesPrice, dishPrice])
            setRowCheck(checkRow(true, access));
            setSelectedDishesType([...selectedDishesType, dishClass])
        }
    }
    
    function filterDish(unselectedDish) {
        let indexUnselect = selectedDishes.indexOf(unselectedDish);
        selectedDishesType.splice(indexUnselect, 1);
        selectedDishesQty.splice(indexUnselect, 1);
        selectedDishesPrice.splice(indexUnselect, 1);
        setSelectedDishes(selectedDishes.filter(function(e) {
            if (e !== unselectedDish){
                return true
            }
        }))
        setSelectedDishesType(selectedDishesType);
        setSelectedDishesQty(selectedDishesType);
        setSelectedDishesPrice(selectedDishesType);
    }

    function evaluate(num){
        let index = selectedDishes.findIndex(dish => dish === dishTitle);

        if (value + num === 0) {
            filterDish(dishTitle);
            setIsSelected('');
            setRowCheck(checkRow(false, access));
        }
        else {
            let auxArrayQty = [...selectedDishesQty];
            setValue(value + num);
            auxArrayQty[index] = value + num;
            setSelectedDishesQty (auxArrayQty);
        }
    }

    function checkRow(value ,key) {
        let newCheck = [...rowCheck];
        newCheck[key] = value;
        return newCheck
    }
    
    return (
        <button type="button" className={'dish ' + dishClass + isSelected} onClick={() => selectDish()}>
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
