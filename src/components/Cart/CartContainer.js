import { useContext } from "react"
import { cartContext } from "../../contexts/CartContext"
import CartItemList from "./CartItemList"
import CartEmpty from "./CartEmpty"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const context = useContext(cartContext)

    const discardCart = () => {
        context.clear()
    }

    if (context.cartIsEmpty()) {
        return <CartEmpty />
    }
   
    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <CartItemList items={context.items} cartPrice={context.cartPrice()} discardCart={discardCart} />                
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/checkout" className="btn btn-primary">Finalizar compra</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CartContainer