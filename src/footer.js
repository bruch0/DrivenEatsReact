import { useState } from "react";

export default function Footer() {
    let [checks, setChecks] = useState([false, false, false]);
    let sentence = ['Selecione os 3 itens', 'para fechar o pedido'];

    let check = checks.find(function (e) {
        if (e !== true) {
            return true    
        }
    })

    if (check !== false) {
        sentence = ['Fechar', 'pedido'];
    }

    return(
        <div className="order">
            <button type="button" className="order-button">
                {sentence[0]} <br /> {sentence[1]}
            </button>
        </div>
    )
}