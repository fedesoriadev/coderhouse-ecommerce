import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from "./CartContext"
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CartContainer from './CartContainer';

const App = () => 
    <CartContext>
        <BrowserRouter>
            <NavBar/>

            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                
                <Route path="/category/:categoryId" component={ItemListContainer} />
                
                <Route path="/item/:id" component={ItemDetailContainer} />

                <Route path="/cart" component={CartContainer}/>
            </Switch>
        </BrowserRouter>
    </CartContext>
    
export default App;
