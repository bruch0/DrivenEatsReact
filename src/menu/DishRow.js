import Dish from "./Dish";

export default function DishRow(props) {
    const 
    { 
        parentClass,
        title,
        dishDetais,
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
                            selectedDishes = {selectedDishes}
                            setSelectedDishes = {setSelectedDishes}
                            selectedDishesQty = {selectedDishesQty}
                            setSelectedDishesQty = {setSelectedDishesQty}
                            selectedDishesPrice = {selectedDishesPrice}
                            setSelectedDishesPrice = {setSelectedDishesPrice}
                            selectedDishesType={selectedDishesType}
                            setSelectedDishesType={setSelectedDishesType}
                            access = {access}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}
