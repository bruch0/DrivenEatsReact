export default function ConfirmOrder() {
    return (
        <div class="confirm-order">
            <div class="container">
                <div class="text-container">
                    <div>Confirme seu pedido</div>

                    <Confirm type='main-dish' />

                    <Confirm type='drink' />

                    <Confirm type='desert' />

                    <div class="total">
                        <div>TOTAL</div>
                        <div class="total-price"></div>
                    </div>
                    <button class="button-confirm">Tudo certo, pode pedir!</button>
                    <button class="button-cancel">cancelar</button>
                </div>
            </div>
        </div>
    )
}

function Confirm(props) {
    return (
        <div class={"confirm-" + props.type}>
            <div class={props.type + '-name'}></div>
            <div class={props.type + '-price'}></div>
        </div>
    )
}