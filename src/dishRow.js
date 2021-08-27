import React, { useState } from "react";
import Dish from "./dish";

export default function DishRow(props) {
    const { parentClass, title, dishDetais, rowCheck, setRowCheck, access } = props;

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
                            rowCheck = {rowCheck}
                            setRowCheck = {setRowCheck}
                            access = {access}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}
