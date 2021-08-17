import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const params = useParams()

    const [item, setItem] = useState()
  
    useEffect(() => {
        if (params.id) {
            fetch('/api/items/' + params.id)
                .then(response => response.json())
                .then(item => setItem(item.item))
        }
    }, [params.id])    

    return (
        <main>
            <header className="bg-dark py-4">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Coffee Market</h1>
                        <p className="lead fw-normal text-white-50 mb-0">El exquisito placer de un buen café</p>
                    </div>
                </div>
            </header>
            <section className="container px-4 px-lg-5 mt-5">
                {item ? <ItemDetail item={item} /> : <Loader />}
            </section>
        </main>
    )
}    

export default ItemDetailContainer