import React, { useState } from 'react'

import { CheckCircle } from 'react-feather';
import { NavLink } from "react-router-dom";
import PRODUCTS from '../../../Backend/Products'
import { CartContext } from '../../../Context/CartContext'

import ProductAddCart from '../ProductAddCart'

const ProductContainer = () => {
    const { state, dispatch } = React.useContext(CartContext);
    const [productos] = useState(PRODUCTS);

    const cartValidation = producto => {
        return !!state.cart.find(productoCart => (productoCart.id == producto.id))
    }


    return (
        <div className="gridProducts">
            {
                productos.map((producto, index) => {

                    return (
                        <div className="productoItem" key={index}>
                            <div className="containerImageItem">
                                <NavLink to={`/detalle/${producto.id}`} className={`${cartValidation(producto) ? "detalleAgregadoItemGrid" : "detalleHoverItemGrid"}`}>
                                    <div className="imageContainerItem">
                                        <span>${producto.precio}</span>
                                        <img src={producto.image} alt={producto.title}></img>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="contentContainerItem">
                                <div><h3>{producto.title}</h3></div>
                                <p>{producto.description}</p>
                                <div className="detailContentItemGrid">
                                    {
                                        cartValidation(producto) &&
                                        <span className="textAddedItem"><CheckCircle /> Agregado al carrito</span>
                                    }
                                    {
                                        !cartValidation(producto) &&
                                        <ProductAddCart producto={producto} />
                                    }
                                </div>

                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default ProductContainer