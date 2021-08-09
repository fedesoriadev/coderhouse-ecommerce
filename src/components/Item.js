import { Link } from "react-router-dom"

const Item = ({item}) => 
    <div className="card mb-2">
        <Link to={'/item/' + item.id}>
            <img src={'/img/products/' + item.image} className="card-img-top" alt="" />
        </Link>
        <div className="card-body">
            <h3 className="card-title">
                <Link to={'/item/' + item.id} className="text-decoration-none">${item.price}</Link>
            </h3>
            <h4><Link to={'/item/' + item.id} className="text-decoration-none">{item.title}</Link></h4>
        </div>
    </div>

export default Item