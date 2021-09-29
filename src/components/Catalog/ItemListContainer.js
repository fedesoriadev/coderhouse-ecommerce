import { firestore } from "../../services/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList"
import Loader from "../Layout/Loader";
import PageNotFound from "../Pages/PageNotFound";

const ItemListContainer = () => {   
    const { categoryId } = useParams()

    const [items, setItems] = useState([])

    const [categoryNotFound, setCategoryNotFound] = useState(false)

    useEffect(() => {
        let itemsCollection = firestore.collection('items')

        if (categoryId) {
            itemsCollection = itemsCollection.where('category', '==', categoryId)
        }

        itemsCollection
            .get()
            .then(query => {
                setCategoryNotFound(query.empty)

                setItems(query.docs.map(item => {
                    return {id: item.id, ...item.data()}
                }))
            }).catch()
    }, [categoryId])


    if (categoryNotFound) {
        return <PageNotFound />
    }

    return (
        <main>
            <section className="container px-4 px-lg-5">
                {items.length ? <ItemList items={items} /> : <Loader />}
            </section>       
        </main>
    )
}    

export default ItemListContainer