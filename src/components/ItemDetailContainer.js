import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = ({onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    const params = useParams()

    const [item, setItem] = useState()
  
    useEffect(() => {
        if (params.id) {
            fetch('/api/items/' + params.id)
                .then(response => response.json())
                .then(item => setItem(item.item))
        }
    }, [params.id])    

    return (
        <main className="container">
            {item ? <ItemDetail item={item} addToCart={addToCart} /> : <Loader />}
        </main>
    )
}    

export default ItemDetailContainer