
import React, { useState, useEffect } from 'react';
import { CartContext } from '../../../Context/CartContext'
import { NavLink } from "react-router-dom";
import './styles.scss'
import TYPES from '../../../Context/CartActions'
import { PlusSquare, MinusSquare, Trash2, ShoppingBag } from 'react-feather';


const TableCart = ({ cartProp }) => {
    const { dispatch } = React.useContext(CartContext);
    const [products, setProducts] = useState(cartProp.cart)
    const [total, setTotal] = useState()
    const [cantidadTotal, setCantidadTotal] = useState()

    useEffect(() => {
        setProducts([...cartProp.cart])
        handleTotal()

    }, [cartProp])


    const handleVaciarCart = () => {
        localStorage.clear()
        dispatch({ type: TYPES.REMOVE_ALL_FROM_CART })
    }

    const handleRemoveItem = (product) => {
        let products = JSON.parse(localStorage.getItem('cart'));
        let NuevoArray = products.filter(item => item.id !== product)
        localStorage.setItem('cart', JSON.stringify(NuevoArray));
        dispatch({ type: TYPES.REMOVE_ITEM_FROM_CART, payload: product })
    }

    const handleDecreaseItem = (id) => {
        dispatch({ type: TYPES.DECREASE_PRODUCT_CART, payload: id })
    }


    const handleIncreaseItem = (id) => {
        dispatch({ type: TYPES.INCREASE_PRODUCT_CART, payload: id })
    }

    const handleTotal = () => {
        let total = 0;
        let cantidadTotal = 0;
        cartProp.cart.forEach(item => {
            total = (item.precio * item.quantity) + total
            cantidadTotal = item.quantity + cantidadTotal
        });
        setTotal(total)
        setCantidadTotal(cantidadTotal)
    }

    return (
        <div className="containerTableCart">
            <table>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>ID</th>
                        <th>Nombre producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <NavLink to={`/detalle/${product.id}`} >
                                            <img src={product.image} alt={product.title} />
                                        </NavLink>
                                    </td>
                                    <td>
                                        {product.id}
                                    </td>
                                    <td>
                                        {product.title}
                                    </td>
                                    <td>
                                        <span style={{ height: '20px', fontSize: '1em' }} onClick={() => handleDecreaseItem(product.id)}><span><MinusSquare /></span></span>
                                        <span style={{ margin: '0px 1em', fontSize: '1.5em' }}>{product.quantity}</span>
                                        <span style={{ height: '20px', fontSize: '1em' }} onClick={() => handleIncreaseItem(product.id)}><span><PlusSquare /></span> </span>
                                    </td>
                                    <td>
                                        $ {product.precio}
                                    </td>
                                    <td>
                                        <span onClick={() => handleRemoveItem(product.id)}> <Trash2 /> </span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="containerTotalCart">

                <div className="totalCart">
                    <p>Total: {`(${products && `${cantidadTotal} Productos`})`}</p>
                    <span>${total}</span>
                    <div className="containerButtonsTotalCart">
                        <a style={{ color: 'red' }} onClick={() => handleVaciarCart()}><Trash2 /> Vaciar Carrito </a>
                        <a><ShoppingBag /> Pagar </a>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default TableCart