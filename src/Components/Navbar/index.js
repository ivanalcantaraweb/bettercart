import React from "react";
import {
    NavLink
} from "react-router-dom";
import './styles.scss'
import Logo from './../../Assets/Images/logo-betterware.png'
import { ShoppingCart } from 'react-feather';
import { Badge } from 'antd';
import { CartContext } from '../../Context/CartContext'

const Navbar = () => {
    const { state } = React.useContext(CartContext);

    return (
        <nav>
            <div id="logo">
                <NavLink to="/"> <img src={Logo} alt="Logo Betterware"></img></NavLink>
            </div>
            <div id="containerMenuNavbar">
                <div id="menuNavbar">
                    <NavLink to="/"> Acerca </NavLink>
                    <NavLink to="/"> Catálogo </NavLink>
                    <NavLink to="/"> Empresa </NavLink>
                </div>
                <div id="shoppingIcon">
                    <NavLink to="/carrito">
                        <Badge count={state.cart.length} showZero style={{ backgroundColor: '#00afca' }} >
                            <ShoppingCart />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar