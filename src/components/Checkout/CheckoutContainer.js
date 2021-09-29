import { firestore, now } from "../../services/firebase"
import { useContext, useState } from "react"
import { cartContext } from "../../contexts/CartContext"
import OrderDetail from "./OrderDetail"
import Checkout from "./Checkout"
import CartEmpty from "../Cart/CartEmpty"

const CheckoutContainer = () => {
    const {cartIsEmpty, items, cartPrice} = useContext(cartContext)

    const [order, setOrder] = useState()

    const checkout = (userFormValues) => {    
        const order = {
            buyer: userFormValues,
            items: items,
            total: cartPrice(),
            created: now()
        }

        firestore
            .collection('orders')
            .add(order)
            .then(({ id }) => {
                setOrder({id, ...order})
            })
            .catch()
    }

    if (cartIsEmpty()) {
        return <CartEmpty />
    }

    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                    { order
                        ? <OrderDetail order={order} /> 
                        : <Checkout checkout={checkout} />
                    }
                    </div>
                </div>                
            </section>
        </main>
    )
}

export default CheckoutContainer