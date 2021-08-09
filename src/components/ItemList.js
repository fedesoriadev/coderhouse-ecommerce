import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="row justify-content-md-center">
            { items && items.length ? 
                items.map(item => {
                    return (
                        <div key={item.id} className="col-3">
                            <Item item={item} />
                        </div>
                    )
                }) : <p className="text-center"><i className="bi bi-droplet-half"></i> <strong>Calentando el agua</strong></p>
            }
        </div>
    )
}

export default ItemList