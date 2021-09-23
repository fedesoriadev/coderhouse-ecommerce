import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const increaseCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decreaseCount = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const confirm = () => {
        if (stock > 0) {
            onAdd(count)
        }
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col-auto">
                    <div className="input-group">                
                        <button className="input-group-text" onClick={decreaseCount} disabled={ count === initial }>-</button>
                        <span className="form-control">{count}</span>
                        <button className="input-group-text" onClick={increaseCount} disabled={ count === stock }>+</button>
                    </div>
                </div>
                <div className="col">
                    Stock disponible: <strong>{stock}</strong>
                </div>
            </div>
           
            <div className="mt-3">                                
                <button onClick={confirm} className="btn btn-primary">
                    <i className="bi bi-cart2"></i> Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount