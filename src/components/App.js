import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from "../contexts/CartContext"
import NavBar from './Layout/NavBar';
import ItemListContainer from './Catalog/ItemListContainer'
import ItemDetailContainer from './Product/ItemDetailContainer'
import CartContainer from './Checkout/CartContainer';
import PageNotFound from './Pages/PageNotFound';
import Footer from './Layout/Footer';

const App = () => 
    <CartContext>
        <BrowserRouter>
            <NavBar/>

            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                
                <Route path="/category/:categoryId" component={ItemListContainer} />
                
                <Route path="/item/:id" component={ItemDetailContainer} />

                <Route path="/cart" component={CartContainer}/>

                <Route component={PageNotFound}/>
            </Switch>

            <Footer/>
        </BrowserRouter>
    </CartContext>
    
export default App;
