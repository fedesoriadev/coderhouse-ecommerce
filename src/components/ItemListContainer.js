import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting, onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>{greeting}</h1>

                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <div className="card">
                            <img src="https://dummyimage.com/280x180/51423D/fff" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Café molido</h5>
                                <p className="card-text">Café premium de Colombia sin torrar.</p>
                                <ItemCount stock={5} initial={1} onAdd={addToCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </main>
    )
}    

export default ItemListContainer