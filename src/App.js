import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Cart from './Cart';
import Footer from './Footer';
import Shop from './Shop';
import products from './Products.json';

// Open and Close Cart

function App() {

  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  }
  const closeCart = () => {
    setShowCart(false);
  }

  // Add and Delete from Cart

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (id) => {
    // console.log(`clicked ${id}`);
    // console.log((products.jackets[id]));
    const itemToAdd = products.jackets.find((product) => product.id === id);
    setCartItems([...cartItems, itemToAdd]);
    console.log(cartItems);
  };

  return (
    <>
      {/* Header */}
      <Header cartClick={openCart} />
      {/* Cover Page */}
      <Hero />
      {/* Cart */}
      <Cart closeCart={closeCart} showCart={showCart} data={cartItems} />
      {/* Product Grid */}
      <section className='products'>
        <h2>Products</h2>
        <Shop data={products} addToCart={addToCart} />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
