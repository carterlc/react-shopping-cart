import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Cart from './Cart';
import Product from './Product';
import Footer from './Footer';

function App() {

  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
    console.log('herehere');
  }
  const closeCart = () => {
    setShowCart(false);
    console.log('herehere');
  }
  return (
    <>
        {/* Header */}
        <Header cartClick={openCart}/>
        {/* Cover Page */}
        <Hero />
        {/* Cart */}
        <Cart closeCart={closeCart} showCart={showCart}/>
        {/* Product Grid */}
        <section className='products'>
          <h2>Products</h2>
          <div className='product-grid'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        {/* Footer */}
       <Footer />
    </>
  );
}

export default App;
