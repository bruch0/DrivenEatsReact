export default function Counter(props) {
    let evaluate = props.func;
    
    return (
        <div className="dish-qty">
            <p className="minus" onClick={(e) => {
                evaluate(-1);
                e.stopPropagation();
            }
            }>
                -
            </p>
            <p>{props.value}</p>
            <p className="plus" onClick={(e) => {
                evaluate(1);
                e.stopPropagation();
            }
            }>
                +
            </p>             
        </div>
    )
}