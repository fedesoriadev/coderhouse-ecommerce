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
        <main>
            <header class="bg-dark py-4">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Coffee Market</h1>
                        <p class="lead fw-normal text-white-50 mb-0">El exquisito placer de un buen café</p>
                    </div>
                </div>
            </header>
            <section className="container px-4 px-lg-5 mt-5">
                {items.length ? <ItemList items={items} /> : <Loader />}
            </section>       
        </main>
    )
}    

export default ItemListContainer