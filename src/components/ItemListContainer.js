import { firestore } from "../firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Hero from "./Hero";
import ItemList from "./ItemList"
import Loader from "./Loader";

const ItemListContainer = () => {   
    const { categoryId } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        let itemsCollection = firestore.collection('items')

        if (categoryId) {
            itemsCollection = itemsCollection.where('categoryId', '==', parseFloat(categoryId))
        }

        itemsCollection
            .get()
            .then(query => {
                if (query.empty) {
                    console.log('No items found!', query)
                }

                setItems(query.docs.map(item => {
                    return {id: item.id, ...item.data()}
                }))
            }).catch(error => {
                console.warn('Error searching items: ', error)
            })
    }, [categoryId])

    return (
        <main>
            <Hero heading={ categoryId ? 'Categoría' : 'Coffee Market' } />
            <section className="container px-4 px-lg-5 mt-5">
                {items.length ? <ItemList items={items} /> : <Loader />}
            </section>       
        </main>
    )
}    

export default ItemListContainer