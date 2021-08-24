export default function DishRow(props) {
    console.log(props)
    return (
        <div class={props.parentClass}>
            <div class="food-title">
                {props.title}
            </div>
            <div class="options">
                {props.dishDetais.forEach(dish => {
                    <Dish 
                        dishClass={dish.dishClass}
                        dishImg={dish.dishImg}
                        dishAlt={dish.dishAlt}
                        dishTitle={dish.dishTitle}
                        dishDescription={dish.dishDescription}
                        dishPrice={dish.dishPrice}
                    />
                })}
            </div>
        </div>
    )
}

function Dish(props) {
    
    return (
        <button type="button" class={props.dishClass}>
            <div class="dish-container">
                <img src={props.dishImg} alt={props.dishAlt} />
                <div class="dish-title">
                    {props.dishTitle}
                </div>
                <div class="description">
                    {props.dishDescription}
                </div>
                <div class="price">
                    <div>R$ <span>{props.dishPrice}</span></div>
                    <ion-icon name="checkmark-circle" />
                </div>
            </div>
        </button>
    )
}