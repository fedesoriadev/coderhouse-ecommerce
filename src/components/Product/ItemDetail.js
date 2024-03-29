import { useState, useContext } from "react"
import { cartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    const context = useContext(cartContext)

    const [count, setCount] = useState(context.isInCart(item.id))

    const addItem = quantityToAdd => {
        if (!context.isInCart(item.id)) {
            context.addItem(item, quantityToAdd)

            setCount(quantityToAdd)
        }
        
    }

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-sm-6 border-end">
                    <div className="d-flex flex-column justify-content-center p-5">
                        <img src={'/img/products/' + item.image} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="p-3 right-side">
                        <h1>{item.title}</h1>

                        <h2>${item.price.toLocaleString()}</h2>
                        
                        <div className="mt-2">
                            <p><strong>Intensidad: </strong>{item.intensity}</p>
                        </div>

                        <div className="mt-2 pr-3 content">
                            <p>{item.description}</p>
                        </div>

                        <div className="mt-5"> 
                            { count 
                                ? <Link to="/cart" className="btn btn-primary mt-auto">Terminar mi compra</Link> 
                                : <ItemCount stock={item.stock} initial={1} onAdd={addItem} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail