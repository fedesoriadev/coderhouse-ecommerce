import ItemCount from "./ItemCount"

const Item = ({item, addToCart}) => 
    <div className="card">
        <img src={item.pictureUrl} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>${item.price}</h6>
            <p className="card-text">{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={addToCart} />
        </div>
    </div>

export default Item