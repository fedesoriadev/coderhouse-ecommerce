import Item from "./Item";

const ItemList = ({items, addToCart}) => {

    return (
        <div className="row justify-content-md-center">
            { items ? 
                items.map(item => {
                    return (
                        <div className="col-3">
                            <Item item={item} addToCart={addToCart} />
                        </div>
                    )
                }) : <p className="text-center"><i className="bi bi-droplet-half"></i> <strong>Calentando el agua</strong></p>
            }
        </div>
    )
}

export default ItemList