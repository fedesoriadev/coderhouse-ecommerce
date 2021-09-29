import { createContext, useState } from "react"

export const cartContext = createContext()

const {Provider} = cartContext

const CartContext = ({children}) => {
    const [items, setItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItem = (item, quantity) => {
        let newItem = item
        newItem.count = quantity

        setItems(items => [...items, newItem])
        setCartCount(cartCount + quantity)
    }

    const removeItem = (itemId, itemCount) => {
        setItems(items => items.filter(item => item.id !== itemId))
        setCartCount( cartCount - itemCount)
    }

    const clear = () => {
        setCartCount(0)
        setItems([])
    }

    const isInCart = itemId => {
        return !! items.filter(item => item.id === itemId).length
    }

    const cartPrice = () => {
        return items.reduce((suma, item) => {
            return suma + (item.price * item.count)
        }, 0).toLocaleString()
    }

    const cartIsEmpty = () => !items.length

    return (
        <Provider value={{ 
            items, 
            cartCount, 
            addItem, 
            removeItem, 
            clear, 
            isInCart, 
            cartPrice, 
            cartIsEmpty 
        }}>
            {children}
        </Provider>
    )
}

export default CartContext