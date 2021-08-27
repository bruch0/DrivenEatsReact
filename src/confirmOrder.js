export default function ConfirmOrder() {
    return (
        <div className="confirm-order">
            <div className="container">
                <div className="text-container">
                    <div>Confirme seu pedido</div>

                    <Confirm type='main-dish' />

                    <Confirm type='drink' />

                    <Confirm type='desert' />

                    <div className="total">
                        <div>TOTAL</div>
                        <div className="total-price"></div>
                    </div>
                    <button className="button-confirm">Tudo certo, pode pedir!</button>
                    <button className="button-cancel">cancelar</button>
                </div>
            </div>
        </div>
    )
}

function Confirm(props) {
    return (
        <div className={"confirm-" + props.type}>
            <div className={props.type + '-name'}></div>
            <div className={props.type + '-price'}></div>
        </div>
    )
}