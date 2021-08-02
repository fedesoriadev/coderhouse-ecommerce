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
            <div className="input-group mb-3">                
                <button className="input-group-text" onClick={decreaseCount}>-</button>
                <span className="form-control">{count} (stock: {stock})</span>
                <button className="input-group-text" onClick={increaseCount}>+</button>
            </div>
            <div>                                
                <button onClick={confirm} className="btn btn-outline-primary">
                    <i className="bi bi-cart2"></i> Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount