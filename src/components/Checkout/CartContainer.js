import { firestore, Timestamp } from "../../services/firebase"
import { useContext, useState } from "react"
import { cartContext } from "../../contexts/CartContext"
import OrderDetail from "./OrderDetail"
import CartItemList from "./CartItemList"
import CartEmpty from "./CartEmpty"

const CartContainer = () => {
    const context = useContext(cartContext)

    const [orderId, setOrderId] = useState()

    const [userInfo] = useState({
        name: 'Federico Soria',
        email: 'test@test.com',
        phone: '+54 9 351 5446677'
    })    

    const discardCart = () => {
        context.clear()
    }

    const cartPrice = context.cartPrice()

    const checkout = () => {
        const order = {
            buyer: userInfo,
            items: context.items,
            total: cartPrice,
            date: Timestamp.fromDate(new Date())
        }

        firestore
            .collection('orders')
            .add(order)
            .then(({ id }) => setOrderId(id))
            .catch(error => console.log('Error al crear orden: ', error))
    }

    return (
        <main>
            <section className="container">
                { orderId 
                ? <div className="row">
                    <div className="col-6 mx-auto">
                        <OrderDetail orderId={orderId} userInfo={userInfo} />
                    </div>
                </div>
                : <>
                    <div className="row">
                        <div className="col">
                            {
                                context.cartIsEmpty()
                                    ? <CartEmpty />
                                    : <CartItemList items={context.items} discardCart={discardCart} />
                            }                 
                        </div>
                        <div className="col-4 mt-5 mt-md-0">
                            <div className="card" style={{display: context.cartIsEmpty() ? 'none' : 'block'}}>
                                <h5 className="card-header">Resumen</h5>
                                <div className="card-body">Total: <strong>${cartPrice}</strong></div>
                                <div className="card-footer">
                                    <button onClick={checkout} className="btn btn-primary">Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                }                
            </section>
        </main>
    )
}

export default CartContainer