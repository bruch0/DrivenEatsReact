import DishRow from "./dishRow"
import DishesData  from "./dishesData"
import React, { useState } from "react";


export default function Dishes() {
    let dishes = DishesData();
    let [rowCheck, setRowCheck] = useState([false, false, false]);
  
    
    return (
        <div className="dishes">
            {dishes.map((row, index) => {
              return (
                  <DishRow 
                    parentClass={row.parentClass}
                    title={row.title}
                    dishDetais = {row.dishDetais}
                    rowCheck = {rowCheck}
                    setRowCheck = {setRowCheck}
                    access = {index}
                    key = {index}
                  />
              )  
            })}
        </div>
    )
}