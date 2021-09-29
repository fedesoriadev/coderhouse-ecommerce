import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const CartItemList = ({ items, cartPrice, discardCart }) =>
    <div className="card">
        <div className="card-header fw-bold">Mi carrito</div>
        <div className="card-body table-responsive">
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th colSpan="2">Item</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>
                            <button onClick={discardCart} className="btn btn-sm btn-outline-primary">
                                <span className="d-none d-sm-block">Vaciar carrito</span> 
                                <span className="d-block d-sm-none"><i className="bi bi-trash d-"></i></span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(item => <CartItem key={item.id} item={item} />)}

                    <tr className="border-white fw-bold">
                        <td colSpan="4">Total</td>
                        <td colSpan="2">$ { cartPrice }</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center mt-3">
                <Link to="/checkout" className="btn btn-primary">Finalizar compra</Link>
            </div>
        </div>                         
    </div>

export default CartItemList