import { useContext } from "react"
import { cartContext } from "./CartContext"
import CartItem from "./CartItem"
import Hero from "./Hero"

const CartContainer = () => {
    const context = useContext(cartContext)

    const clear = () => {
        context.clear()
    }

    return (
        <main>
            <Hero heading="Mis productos" />
            <section className="container">
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
                        <div className="card p-4">
                            <p>Resumen</p>
                        </div>
                    </div>
                </div>
            </section>            
        </main>
    )
}

export default CartContainer