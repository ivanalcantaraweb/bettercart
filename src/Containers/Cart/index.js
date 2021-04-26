import React from 'react'
import './styles.scss';
import TableCart from './TableCart';
import { Empty } from 'antd';
import { CartContext } from '../../Context/CartContext'
import { NavLink } from "react-router-dom";
import EmptyCart from '../../Assets/Images/emptyCart.png'

const Cart = () => {
    const { state } = React.useContext(CartContext);
    return (
        <div className="containerCart">
            <div className="titleCart">
                <h2> Carrito de compras </h2>
            </div>
            <div className="contentCart">
                {
                    state ?
                        state.cart.length > 0 ?
                            <TableCart cartProp={state} />
                            : <div className="emptyCart">
                                <Empty
                                    image={EmptyCart}
                                    description={
                                        <span style={{ display: 'flex', flexDirection: 'column' }}>
                                            Carrito de compras vacío   <NavLink to={`/`} className="btn-primario" style={{ width: '150px', margin: '1.5em auto' }} > <span>Catálogo</span></NavLink>
                                        </span>
                                    } />
                            </div>
                        : <h1>Cargando</h1>
                }

            </div>
        </div>
    )
}
export default Cart;