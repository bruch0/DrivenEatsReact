import DishRow from "./DishRow"


export default function Menu(props) {
  let dishes = props.dishesData;
  let 
  {
    rowCheck,
    setRowCheck,
    selectedDishes,
    setSelectedDishes,
    selectedDishesQty,
    setSelectedDishesQty,
    selectedDishesPrice,
    setSelectedDishesPrice
  } = props;

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
                  selectedDishes = {selectedDishes}
                  setSelectedDishes = {setSelectedDishes}
                  selectedDishesQty = {selectedDishesQty}
                  setSelectedDishesQty = {setSelectedDishesQty}
                  selectedDishesPrice = {selectedDishesPrice}
                  setSelectedDishesPrice = {setSelectedDishesPrice}
                  access = {index}
                  key = {index}
                />
              )  
            })}
        </div>
    )
}