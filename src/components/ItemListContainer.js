import { useState } from "react";
import ItemList from "./ItemList"

const ItemListContainer = ({onAdd}) => {
    const addToCart = (count) => {
        onAdd(count)
    }

    const [products, setProducts] = useState()

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                {id: 'VZkzbiVofu', title: 'Café molido', price: 850, pictureUrl: 'https://dummyimage.com/280x180/0CA5B0/fff', description: 'Fuerte aroma desde Colomba', stock: 3},
                {id: 'OpHRq3pb7E', title: 'Café en granos', price: 1050, pictureUrl: 'https://dummyimage.com/280x180/51423D/fff', description: 'Granos suaves de Italia', stock: 5},
                {id: 'bFzuoUXGiS', title: 'Café instantáneo', price: 120, pictureUrl: 'https://dummyimage.com/280x180/A5B3AA/fff', description: 'Café La Virginia', stock: 10},
            ]

            resolve(products)
        }, 2000)
    })

    getProducts.then(products => setProducts(products))

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <ItemList items={products} addToCart={addToCart} />
            </div>        
        </main>
    )
}    

export default ItemListContainer