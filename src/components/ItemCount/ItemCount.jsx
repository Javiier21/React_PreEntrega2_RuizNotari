import { useState } from "react";

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (count > 1){
            setCount(prev => prev -1)
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>{count}</h3>
                    <button onClick={decrement}>-</button>
                    <button onClick={() => onAdd(count)}>Agregar al carrito</button>
                    <button onClick={increment}>+</button>
                
                </div>
            </div>
        </div>
    )
}

export default ItemCount