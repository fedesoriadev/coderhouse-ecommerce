import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList"
import Loader from "./Loader";

const ItemListContainer = () => {   
    const params = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        if (params.categoryId) {
            fetch('/api/categories/' + params.categoryId + '/items')
                .then(response => response.json())
                .then(categoryItems => setItems(categoryItems.items))
        } else {
            fetch('/api/items/')
                .then(response => response.json())
                .then(items => setItems(items.items))
        }
    }, [params.categoryId])

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                {items.length ? <ItemList items={items} /> : <Loader />}
            </div>        
        </main>
    )
}    

export default ItemListContainer