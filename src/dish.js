import Counter from "./counter";
import React, { useState } from "react";
import Footer from "./footer";

export default function Dish(props) {
    const { dishClass, dishImg, dishAlt, dishTitle, dishDescription, dishPrice, rowCheck, setRowCheck, access } = props;
    let [isSelected, setIsSelected] = useState('');
    let [value, setValue] = useState(1);

    function checkRow(value ,key) {
        let newCheck = [... rowCheck];
        newCheck[key] = value;
        return newCheck
    }

    function evaluate(num){
        if (value + num === 0) {
            setIsSelected('');
            setRowCheck(checkRow(false, access));
            <Footer checks={rowCheck}/>
        }
        else {
            setValue(value + num);
            setRowCheck(checkRow(true, access));

            <Footer checks={rowCheck}/>
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
