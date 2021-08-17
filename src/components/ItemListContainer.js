import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Hero from "./Hero";
import ItemList from "./ItemList"
import Loader from "./Loader";

const ItemListContainer = () => {   
    const params = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        if (params.categoryId) {
            fetch('/api/categories/' + params.categoryId + '/items')
                .then(response => response.json())
                .then(category => {
                    setItems(category.items)
                })
        } else {
            fetch('/api/items/')
                .then(response => response.json())
                .then(items => setItems(items.items))
        }
    }, [params.categoryId])

    return (
        <main>
            <Hero heading={ params.categoryId ? 'Categoría' : 'Coffee Market' } />
            <section className="container px-4 px-lg-5 mt-5">
                {items.length ? <ItemList items={items} /> : <Loader />}
            </section>       
        </main>
    )
}    

export default ItemListContainer