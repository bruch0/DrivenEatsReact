import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';

export default function ConfirmOrder(props) {
    const 
        {
            selectedDishes,
            selectedDishesQty,
            selectedDishesPrice,
            selectedDishesType
        } = props.location.state

        function returnPricesNumbered(arrPrices) {
            let newArr = []
            arrPrices.forEach(e => {newArr.push(Number(e.replace(',','.')))})
            return newArr
        }
        let dishesPrices = returnPricesNumbered(selectedDishesPrice)

        function calculateTotalPrice() {
            let total = 0;
            selectedDishesPrice.forEach((e, index) => {
                total += Number(e.replace(',','.')) * selectedDishesQty[index]
            });
            
            return total
        }

        let totalPrice = calculateTotalPrice().toFixed(2).toString();


    function order () {
        let text = 'https://wa.me/5548984321748?text=';

        function getType(type) {
            let aux = [];
            selectedDishesType.forEach((e, index) => {
                if (e === type) {
                    aux.push(index);
                }
            });

            return aux
        }

        function buildOrder(type) {
            let order = '';
            let qty = '';
            type.forEach(e => {
                if (selectedDishesQty[e] !== 1) {
                    qty = `(${selectedDishesQty[e]}x)`
                }
                order += `${selectedDishes[e]} ${qty}\n`;
            });

            return order
        }

        

        let arrMain = getType('main');
        let arrDrink = getType('drink');
        let arrDesert = getType('desert');

        let mainOrder = buildOrder(arrMain);
        let drinkOrder = buildOrder(arrDrink);
        let desertOrder = buildOrder(arrDesert);

        
        let userOrder = 
        encodeURIComponent(
            `*- Pratos:* \n${mainOrder} \n*- Bebidas:* \n${drinkOrder} \n*- Sobremesas:* \n${desertOrder}\n\n *Total*: R$ ${(totalPrice).replace('.', ',')}`
        );
        
        window.location.replace(text + userOrder);
    }

    return(
        <>
        <Topbar />
        <div className="confirm-order">
            <p>Revise seu pedido</p>
            <div className="container">
                {selectedDishes.map((element, index) => {
                    return (
                        <ConfirmFood
                            foodTitle={element}
                            foodQty={(selectedDishesQty[index] !== 1) ? `(${selectedDishesQty[index]})` : ''}
                            foodPrice={(dishesPrices[index] * Number(selectedDishesQty[index])).toFixed(2)}
                            key={index}
                        />
                    )
                    
                })}
                

                <div className="total">
                    <div>TOTAL</div>
                    <div className="total-price">{`R$ ${(totalPrice).replace('.', ',')}`}</div>
                </div>
            </div>

            <button className="button-confirm" onClick={order}>Tudo certo, pode pedir!</button>
            <Link to="/"><button className="button-cancel">Cancelar</button></Link>
        </div>
        </>
    )
}

function ConfirmFood(props) {
    return (
        <div className="confirm-foods">
            <div>
                {props.foodTitle} {props.foodQty}
            </div>
            <div>
                {props.foodPrice}
            </div>
        </div>
    )
}
