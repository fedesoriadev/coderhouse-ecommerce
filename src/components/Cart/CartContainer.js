import { useContext } from "react"
import { cartContext } from "../../contexts/CartContext"
import CartItemList from "./CartItemList"
import CartEmpty from "./CartEmpty"

const CartContainer = () => {
    const {clear, cartIsEmpty, items, cartPrice} = useContext(cartContext)

    const discardCart = () => {
        clear()
    }

    if (cartIsEmpty()) {
        return <CartEmpty />
    }
   
    return (
        <main>
            <section className="container">
                <CartItemList items={items} cartPrice={cartPrice()} discardCart={discardCart} />
            </section>
        </main>
    )
}

export default CartContainer