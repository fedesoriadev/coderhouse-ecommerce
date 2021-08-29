import { firestore, Timestamp } from "../firebase"
import { useContext, useState } from "react"
import { cartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./Cart"
import Hero from "./Hero"
import OrderDetail from "./OrderDetail"

const CartContainer = () => {
    const context = useContext(cartContext)

    const [orderId, setOrderId] = useState()

    const [userInfo] = useState({
        name: 'Federico Soria',
        email: 'test@test.com',
        phone: '+54 9 351 5446677'
    })    

    const clear = () => {
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

    if (!context.items.length) {
        return (
            <main className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-5 text-center">
                            <h4 className="mb-5">No hay productos en el carrito.</h4>
                            <Link to="/" className="btn btn-outline-primary">Vamos a elegir un café!</Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Hero heading="Mis productos" />
            <section className="container">
                { orderId 
                ? <div className="row">
                    <div className="col-6 mx-auto">
                        <OrderDetail orderId={orderId} userInfo={userInfo} />
                    </div>
                </div>
                : <>
                    <div className="row gx-5">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">Item</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>{context.items.length ? context.items.map(item => <CartItem key={item.id} item={item} />) : <tr></tr>}</tbody>
                                    </table>
                                </div>
                                <div className="card-footer text-center">
                                    <button onClick={clear} className="btn btn-outline-primary">Quitar todos los productos <i className="bi bi-trash"></i></button>
                                </div>                            
                            </div>                    
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
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