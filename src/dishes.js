import DishRow from "./dishRow"
import DishesData  from "./dishesData"


export default function Dishes() {
    let dishes = DishesData();
    
    return (
        <div class="dishes">
            {dishes.map((row, index) => {
              return (
                  <DishRow 
                    parentClass={row.parentClass}
                    title={row.title}
                    dishDetais = {row.dishDetais}
                    key={index}
                  />
              )  
            })}
        </div>
    )
}