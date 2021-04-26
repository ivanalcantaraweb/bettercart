import { Carousel } from 'antd';
import './styles.scss'
import {
    NavLink
} from "react-router-dom";

import SLIDERSOURCE from '../../Backend/Slider'
import { useState } from 'react';

const Slider = () => {
    const [slider] = useState([...SLIDERSOURCE])

    return (
        <Carousel autoplay>
            {
                slider.map((slide, index) => {
                    return (
                        <div key={index}>
                            <div className="containerSlider" style={{ background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(17,18,18,1) 100%), url(${slide.image}) ` }}>
                                <div className="contentSlider">
                                    <h1>
                                        {slide.title}
                                    </h1>
                                    <p>
                                        {slide.description}
                                    </p>
                                    <NavLink to={`detalle/${slide.id}`} className="btn-primario"><span>Ir a producto</span></NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </Carousel>
    )
}

export default Slider



