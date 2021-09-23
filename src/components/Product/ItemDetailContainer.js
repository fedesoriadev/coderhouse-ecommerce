import { firestore } from "../../services/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loader from "../Layout/Loader";
import PageNotFound from "../Pages/PageNotFound";

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState()

    const [docNotFound, setDocNotFound] = useState(false)
  
    useEffect(() => {
        if (id) {
            firestore.collection('items')
                .doc(id)
                .get()
                .then(query => {
                    setDocNotFound(!query.exists)

                    setItem({ id: id, ...query.data() })
                })
        }
    }, [id])

    if (docNotFound) {
        return <PageNotFound />
    }

    return (
        <main>
            <section className="container px-4 px-lg-5 pb-5">
                {item ? <ItemDetail item={item} /> : <Loader />}
            </section>
        </main>
    )
}    

export default ItemDetailContainer