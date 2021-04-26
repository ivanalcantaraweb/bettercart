
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Components */
import Navbar from './Components/Navbar'

/* Containers */
import Home from './Containers/Home'
import ProductDetail from './Containers/ProductDetail'
import Cart from './Containers/Cart'
import Footer from './Components/Footer'

/* Context */
import CartProvider from './Context/CartContext'

/* Styles */
import 'antd/dist/antd.css';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/detalle/:idProducto" exact>
              <ProductDetail />
            </Route>
            <Route path="/carrito" exact>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </CartProvider>

    </div>
  );
}

export default App;
