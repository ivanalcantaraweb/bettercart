import React from 'react'
import './styles.scss'
import Slider from '../../Components/Slider'
import ProductContainer from '../../Components/Products/ProductContainer'

const Home = () => {
    return (
        <div id="home">
            <Slider></Slider>
            <div className="containerHome">
                <div className="containerGridProducts">
                    <div className="titleGridProducts">
                        <h2>Productos disponibles</h2>
                    </div>
                    <ProductContainer />
                </div>
            </div>
        </div >
    )
}

export default Home