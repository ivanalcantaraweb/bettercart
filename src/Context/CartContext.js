import React, { useReducer } from 'react';
import Reducer from '../Context/CartReducers';

export const CartContext = React.createContext(null);

const localbase = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, { cart: localbase })

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider