import { firestore, now } from "../../services/firebase"
import { useContext, useState } from "react"
import { cartContext } from "../../contexts/CartContext"
import OrderDetail from "./OrderDetail"
import Checkout from "./Checkout"

const CheckoutContainer = () => {

    const context = useContext(cartContext)

    const [orderId, setOrderId] = useState()

    const [userInfo, setUserInfo] = useState({})

    const checkout = (userFormValues) => {
        setUserInfo(userFormValues)
        
        const order = {
            buyer: userFormValues,
            items: context.items,
            total: context.cartPrice(),
            created: now()
        }

        firestore
            .collection('orders')
            .add(order)
            .then(({ id }) => setOrderId(id))
            .catch(error => console.warn('Error al crear orden: ', error))
    }

    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        { orderId &&<OrderDetail orderId={orderId} userInfo={userInfo} /> }

                        <Checkout checkout={checkout} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CheckoutContainer