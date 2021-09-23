import { Link } from "react-router-dom"

const Item = ({item}) => 
    <div className="card h-100 text-center">
        <span className="badge bg-primary text-white position-absolute tag-intensity">{item.intensity}</span>
        <Link to={'/item/' + item.id}>
            <img src={'/img/products/' + item.image} className="card-img-top" alt="" />
        </Link>
        <div className="card-body p-4">
            <h5 className="fw-bolder">
                <Link to={'/item/' + item.id} className="text-decoration-none">{item.title}</Link>
            </h5>
            <strong>
                <Link to={'/item/' + item.id} className="text-decoration-none">${item.price}</Link>
            </strong>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <Link to={'/item/' + item.id} className="btn btn-primary mt-auto">Comprar</Link>
        </div>
    </div>

export default Item