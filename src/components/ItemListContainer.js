import { useState, useEffect } from "react";
import ItemList from "./ItemList"

const ItemListContainer = ({onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    const [products, setProducts] = useState([])
  
    useEffect(() => {
        // Muevo el array de productos a un mock en la nube para probar fetch()
        // No tiene sentido poner esta lógica en una function getItems
        fetch('https://run.mocky.io/v3/723312d7-5b4a-4d4e-8409-b03938520b95')
            .then(response => response.json())
            .then(products => setProducts(products))
    }, [])    

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <ItemList items={products} addToCart={addToCart} />
            </div>        
        </main>
    )
}    

export default ItemListContainer