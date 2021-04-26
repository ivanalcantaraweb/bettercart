import React, { useEffect, useState } from 'react'
import PRODUCTS from '../../Backend/Products/index'
import { useParams } from "react-router-dom";
import './styles.scss'
import Loading from '../../Components/Loading'


const ProductDetail = () => {
    let { idProducto } = useParams();
    const [producto, setProducto] = useState();

    useEffect(() => {
        const encontrado = PRODUCTS.find(product => product.id == idProducto);
        setProducto(encontrado)
    }, [])

    return (
        producto ? <div className="continerProductDetail">

            <div className="titleGridProducts">
                <h2>Detalle producto</h2>
            </div>
            <div className="continerProductDetail">
                <div className="imageProductDetail">
                    <img src={producto.image} alt={producto.title}></img>
                </div>
                <div className="contentProductDetail">
                    <div className="innerProductDetail">
                        <span className="titleProductDetail">{producto.title}</span>
                        <span className="idProductDetail">Número producto #{producto.id}</span>
                        <span className="priceProductDetail">$ {producto.precio} </span>
                        <p className="descriptionProductDetail">{producto.description}</p>
                    </div>
                </div>
            </div>
        </div> : <Loading />
    )
}

export default ProductDetail;