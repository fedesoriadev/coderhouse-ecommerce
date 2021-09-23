import { Link } from "react-router-dom"

const OrderDetail = ({ orderId, userInfo }) =>
    <div className="card">
        <h5 className="card-header">Orden de compra</h5>
        <div className="card-body">
            <ul className="list-group">
                <li className="list-group-item">Order ID: <strong>{orderId}</strong></li>
                <li className="list-group-item">Titular: {userInfo.name} «{userInfo.email}» ({userInfo.phone})</li>
            </ul>
        </div>
        <div className="card-footer">
            <Link to="/" className="btn btn-primary">Volver a Home</Link>
        </div>
    </div>

export default OrderDetail