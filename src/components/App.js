import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CartContainer from './CartContainer';

const App = () => {
    const [itemsOnCart, setItemOnCart] = useState(0)

    const addToCart = (items) => {
        setItemOnCart(items)
    }

    return (
        <BrowserRouter>
            <NavBar itemsOnCart={itemsOnCart} />

            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                
                <Route path="/category/:categoryId" component={ItemListContainer} />
                
                <Route path="/item/:id">
                    <ItemDetailContainer onAdd={addToCart} />
                </Route>

                <Route path="/cart" component={CartContainer}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
