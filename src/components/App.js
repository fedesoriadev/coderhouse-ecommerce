import { useState } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer'

const App = () => {
    const [itemsOnCart, setItemOnCart] = useState(0)

    const addToCart = (items) => {
        setItemOnCart(items)
    } 

    return (
        <>
            <NavBar itemsOnCart={itemsOnCart} />
            <ItemListContainer onAdd={addToCart} greeting="Bienvenido a Coffee Market! Te invito a descubrir el maravilloso mundo del café."/>
        </>
    )
}

export default App;
