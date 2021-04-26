import React from 'react'
import TYPES from '../../../Context/CartActions'
import { CartContext } from '../../../Context/CartContext'
import { message } from 'antd';
import './styles.scss'
import { PlusSquare } from 'react-feather';

const ProductAddCart = ({ producto }) => {
    const { dispatch } = React.useContext(CartContext);


    const handleAdd = (producto) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: producto })
        addToLocalStorage(producto)
    }

    const addToLocalStorage = (payload) => {
        let products = [];
        if (localStorage.getItem('cart')) {
            products = JSON.parse(localStorage.getItem('cart'));
        }
        products.push({ ...payload, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(products));
        message.success('Articulo añadido exitosamente');
    }

    return (
        <span className="textAddItem" onClick={() => handleAdd(producto)}>
            <PlusSquare />Agregar al carrito
        </span>
    )
}

export default ProductAddCart;