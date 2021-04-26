import React from 'react'
import './styles.scss';
import LogoFooter from '../../Assets/Images/logoFooter.jpg'
import {
    NavLink
} from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="innerFooter">


                <div id="logoFooter">
                    <img src={LogoFooter} alt="logo Footer"></img>
                    <span>Copyright | Betterware 2021</span>
                </div>
                <div id="contentFooter">

                    <ul>
                        <li>
                            Mapa de sitio
                        </li>
                        <li>
                            <NavLink to="/"> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Carrito</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Acerca de</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Redes sociales
                        </li>
                        <li>
                            <NavLink to="/">Facebook</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Intagram</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Twitter</NavLink>

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;