import { useState } from "react";

export default function Footer(props) {
    const 
    {
        rowCheck,
        selectedDishes,
        selectedDishesQty,
        selectedDishesPrice,
        selectedDishesType
    } = props

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

        function calculateTotalPrice() {
            let total = 0;
            selectedDishesPrice.forEach((e, index) => {
                total += Number(e.replace(',','.')) * selectedDishesQty[index]
            });
            
            return total
        }

        let arrMain = getType('main');
        let arrDrink = getType('drink');
        let arrDesert = getType('desert');

        let mainOrder = buildOrder(arrMain);
        let drinkOrder = buildOrder(arrDrink);
        let desertOrder = buildOrder(arrDesert);

        let totalPrice = calculateTotalPrice().toFixed(2).toString();
        
        let userOrder = 
        encodeURIComponent(
            `*- Pratos:* \n${mainOrder} \n*- Bebidas:* \n${drinkOrder} \n*- Sobremesas:* \n${desertOrder}\n\n *Total*: R$ ${(totalPrice).replace('.', ',')}`
        );
        
        window.location.replace(text + userOrder);
    }

    let sentence;
    let auxClass;
    let check = rowCheck.find(function (e) {
        if (e !== true) {
            return true    
        }
    })

    if (check !== false) {
        sentence = ['Fechar', 'pedido'];
        auxClass = 'select';
    }
    else {
        sentence = ['Selecione os 3 itens', 'para fechar o pedido'];
        auxClass = 'disable-link';
    }

    return(
        <div className={'order ' + auxClass}>
            <button type="button" className="order-button" onClick={() => order()}>
                {sentence[0]} <br /> {sentence[1]}
            </button>
        </div>
    )
}

