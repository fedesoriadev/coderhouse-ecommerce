import { useContext } from "react"
import { cartContext } from './CartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {
    const context = useContext(cartContext)

    return (
        <>
            <Link to="/cart">
                <button className="btn btn-secondary position-relative">
                    <i className="bi bi-cart2"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {context.cartCount}
                    </span>
                </button>
            </Link>
            <ul>
                {
                    context.items.length ? context.items.map(item => {
                        return (<li key={item.id}>{item.title}</li>)
                    }) : ''
                }
            </ul>            
        </>
    )
}

export default CartWidget