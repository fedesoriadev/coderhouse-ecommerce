import { useState, useEffect } from "react";
import ItemList from "./ItemList"
import {productsFromDB} from "../fixtures/products"

const ItemListContainer = ({onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    const [products, setProducts] = useState([])
  
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                resolve(productsFromDB)
            }, 2000)
        })

        getProducts.then(products => setProducts(products))
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