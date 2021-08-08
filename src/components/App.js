import { useState } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

const App = () => {
    const [itemsOnCart, setItemOnCart] = useState(0)

    const addToCart = (items) => {
        setItemOnCart(items)
    }

    return (
        <>
            <NavBar itemsOnCart={itemsOnCart} />
            {/* <ItemListContainer onAdd={addToCart} /> */}
            <ItemDetailContainer onAdd={addToCart} />
        </>
    )
}

export default App;
