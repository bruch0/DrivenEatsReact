export default function DishRow(props) {
    const { parentClass, title, dishDetais } = props
    return (
        <div class={parentClass}>
            <div class="food-title">
                {title}
            </div>
            <div class="options">
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
    const { dishClass, dishImg, dishAlt, dishTitle, dishDescription, dishPrice } = props
    return (
        <button type="button" class={dishClass}>
            <div class="dish-container">
                <img src={dishImg} alt={dishAlt} />
                <div class="dish-title">
                    {dishTitle}
                </div>
                <div class="description">
                    {dishDescription}
                </div>
                <div class="price">
                    <div>R$ <span>{dishPrice}</span></div>
                    <ion-icon name="checkmark-circle" />
                </div>
            </div>
        </button>
    )
}