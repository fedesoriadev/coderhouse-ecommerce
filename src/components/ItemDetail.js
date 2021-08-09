import ItemCount from "./ItemCount"

const ItemDetail = ({item, addToCart}) => 
    <div className="card">
        <div className="row g-0">
            <div className="col-md-6 border-end">
                <div className="d-flex flex-column justify-content-center p-5">
                    <img src={'/img/products/' + item.image} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-3 right-side">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>{item.title}</h3> <i className='bi bi-heart'></i>
                    </div>

                    <h3>${item.price}</h3>
                    
                    <div className="mt-2">
                        <p><strong>Intensidad: </strong>{item.intensity}</p>
                    </div>

                    <div className="mt-2 pr-3 content">
                        <p>{item.description}</p>
                    </div>

                    <div className="mt-5"> 
                        <ItemCount stock={item.stock} initial={1} onAdd={addToCart} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
export default ItemDetail