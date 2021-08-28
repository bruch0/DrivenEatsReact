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
        
        
        let userOrder = 
        encodeURIComponent(
            `Olá, gostaria de fazer o pedido: \n\n- Prato: {mainDish} \n- Bebida: {drink} \n- Sobremesa: {desert} \nTotal: R$ {total.replace('.', ',')}`
        );
        
        window.location.replace(text + userOrder)
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
            <button type="button" className="order-button" onClick={() => console.log('a')}>
                {sentence[0]} <br /> {sentence[1]}
            </button>
        </div>
    )
}

