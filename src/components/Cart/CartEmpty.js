import { Link } from "react-router-dom"

const CartEmpty = () =>
    <div className="card">
        <div className="card-body">
            <h4 className="mb-5">No hay productos en el carrito.</h4>
            <Link to="/" className="btn btn-primary">Vamos a elegir un café!</Link>
        </div>
    </div>

export default CartEmpty