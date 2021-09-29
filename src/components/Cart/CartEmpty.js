import { Link } from "react-router-dom";

const CartEmpty = () => (
    <main>
        <section className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="alert alert-dark">
                                <strong>No hay productos en el carrito</strong>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/" className="btn btn-primary">
                                Volver a Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default CartEmpty;
