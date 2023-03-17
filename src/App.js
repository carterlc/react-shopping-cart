import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Cart from './Cart';
import Footer from './Footer';
import Shop from './Shop';
import products from './Products.json';

function App() {

  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  }
  const closeCart = () => {
    setShowCart(false);
  }
  return (
    <>
      {/* Header */}
      <Header cartClick={openCart} />
      {/* Cover Page */}
      <Hero />
      {/* Cart */}
      <Cart closeCart={closeCart} showCart={showCart} data={products} />
      {/* Product Grid */}
      <section className='products'>
        <h2>Products</h2>
        <Shop data={products} />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
