import ItemCount from "./ItemCount"

const ItemDetail = ({item, addToCart}) => 
    <div className="card">
        <div className="row g-0">
            <div className="col-md-6 border-end">
                <div className="d-flex flex-column justify-content-center p-5">
                    <img src={item.pictureUrl} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-3 right-side">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>{item.title}</h3> <i className='bi bi-heart'></i>
                    </div>
                    <div className="mt-2 pr-3 content">
                        <p>{item.description}</p>
                    </div>
                    <h3>${item.price}</h3>
                    <div className="mt-1 ratings d-flex flex-row align-items-center">
                        <div className="d-flex flex-row"> 
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star'></i>
                        </div> <span>&nbsp;441 reviews</span>
                    </div>
                    <div className="mt-5"> <span className="fw-bold">Especificaciones</span>
                            <ul>
                                {item.specs.map((spec, index) => <li key={index}>{spec}</li>)}
                            </ul>
                    </div>
                    <div className="mt-5"> 
                        <ItemCount stock={item.stock} initial={1} onAdd={addToCart} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
export default ItemDetail