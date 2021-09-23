import Item from "./Item";

const ItemList = ({items}) => {

    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            { items && items.length ? 
                items.map(item => {
                    return (
                        <div key={item.id} className="col mb-5">
                            <Item item={item} />
                        </div>
                    )
                }) : <p className="text-center"><i className="bi bi-droplet-half"></i> <strong>Calentando el agua</strong></p>
            }
        </div>
    )
}

export default ItemList