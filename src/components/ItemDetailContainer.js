import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    const [item, setItem] = useState()
  
    useEffect(() => {
        // Muevo el detalle de producto a un mock en la nube para probar fetch()
        // No tiene sentido poner esta lógica en una function getItems
        fetch('https://run.mocky.io/v3/72885cdd-b929-4bfb-9f6a-04cf6850b265')
            .then(response => response.json())
            .then(item => setItem(item))
    }, [])    

    return (
        <main className="container">
            {item ? <ItemDetail item={item} addToCart={addToCart} /> : 'Cargando producto...'}
        </main>
    )
}    

export default ItemDetailContainer