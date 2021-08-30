import { Link } from 'react-router-dom';

export default function Footer(props) {
    const 
    {
        rowCheck,
        selectedDishes,
        selectedDishesQty,
        selectedDishesPrice,
        selectedDishesType
    } = props

    let sentence;
    let auxClass;
    let check = rowCheck.find(function (e) {
        if (e !== true) {
            return true    
        }
        else {
            return false
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
        <Link to={{pathname: "/revisar", state: { selectedDishes: selectedDishes, selectedDishesQty: selectedDishesQty, selectedDishesPrice: selectedDishesPrice, selectedDishesType: selectedDishesType}}}>
            <div className={'order ' + auxClass}>
                <button type="button" className="order-button">
                    {sentence[0]} <br /> {sentence[1]}
                </button>
            </div>
        </Link>
    )
}

