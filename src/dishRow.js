import React, { useState } from "react";
import Counter from "./counter";

export default function DishRow(props) {
    const { parentClass, title, dishDetais } = props
    return (
        <div className={parentClass}>
            <div className="food-title">
                {title}
            </div>
            <div className="options">
                {dishDetais.map((dish, index) => {
                    return(
                        <Dish 
                            dishClass={dish.dishClass}
                            dishImg={dish.dishImg}
                            dishAlt={dish.dishAlt}
                            dishTitle={dish.dishTitle}
                            dishDescription={dish.dishDescription}
                            dishPrice={dish.dishPrice}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function Dish(props) {
    const { dishClass, dishImg, dishAlt, dishTitle, dishDescription, dishPrice } = props;
    let [isSelected, setIsSelected] = useState('');
    let [value, setValue] = useState(1);

    function evaluate(num){
        if (value + num === 0) {
            setIsSelected('');
        }
        else {
            setValue(value + num);
        }
    }
    return (
        <button type="button" className={dishClass + isSelected} onClick={() => setIsSelected(' select')}>
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
