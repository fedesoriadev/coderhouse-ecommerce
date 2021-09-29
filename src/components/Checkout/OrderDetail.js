import { Link } from "react-router-dom";

const OrderDetail = ({ order }) => {
    const { buyer } = order;

    return (
        <div className="card">
            <div className="card-body">
                <div className="alert alert-success">
                    <h5>Muchas gracias por tu compra!</h5>
                    <p>Esperamos que disfrutes de un buen café</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h5>Orden de compra</h5>
                        <ul className="list">
                            <li>
                                <strong>Orden: </strong>{order.id}
                            </li>
                            <li>
                                <strong>Total: </strong>$ {order.total.toLocaleString()}
                            </li>
                        </ul>
                    </li>
                    <li class="list-group-item">
                        <h5>Comprador</h5>
                        <ul className="list">
                            <li>
                                <strong>Nombre: </strong>{buyer.name}
                            </li>
                            <li>
                                <strong>Email: </strong>{buyer.email}
                            </li>
                            <li>
                                <strong>Teléfono: </strong>{buyer.phone}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="card-footer text-center">
                <Link to="/" className="btn btn-primary">
                    Volver a Home
                </Link>
            </div>
        </div>
    );
};

export default OrderDetail;
