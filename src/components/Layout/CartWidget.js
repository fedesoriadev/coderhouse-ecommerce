import { useContext } from "react"
import { cartContext } from '../../contexts/CartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cartCount} = useContext(cartContext)

    return (
        <>
            <Link to="/cart" className="ms-auto me-3">
                <button className="btn btn-secondary position-relative">
                    <i className="bi bi-cart2"></i>
                    <span style={{display: (cartCount) ? 'inline' : 'none'}} 
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {cartCount}
                    </span>
                </button>
            </Link>       
        </>
    )
}

export default CartWidget