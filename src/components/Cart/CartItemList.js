import CartItem from "./CartItem"

const CartItemList = ({ items, cartPrice, discardCart }) =>
    <div className="card">
        <div className="card-body">
        <button onClick={discardCart} className="btn btn-primary">Quitar todos los productos <i className="bi bi-trash"></i></button>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Item</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <CartItem key={item.id} item={item} />)
                    }
                </tbody>
            </table>
        </div>
        <div className="card-footer text-center">
            Total: <strong>{ cartPrice }</strong>
        </div>                            
    </div>

export default CartItemList