import { useContext } from "react"
import { cartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartItem = ({ item }) => {
    const context = useContext(cartContext)

    const removeItem = () => {
        context.removeItem(item.id, item.count)
    }

    return (
        <tr>
            <td width="80">
                <Link to={'/item/' + item.id}>
                    <img src={'/img/products/' + item.image} className="img-fluid" alt="" />
                </Link>
            </td>
            <td width="50%"><Link to={'/item/' + item.id}>{item.title}</Link></td>
            <td>${item.price}</td>
            <td>{item.count}</td>
            <td>
                <button onClick={removeItem} className="btn" title="Remover del carrito">
                    <i className="bi bi-bag-x"></i>
                </button>
            </td>
        </tr>
    )
}

export default CartItem