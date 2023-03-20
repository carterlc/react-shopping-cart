import './App.css';
import React, { useState, useEffect } from 'react';
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
    const itemToAdd = products.jackets.find((product) => product.id === id);

    const itemFromCart = cartItems.find((product) => product.id === id);

    if (itemFromCart?.quantity) {
      itemToAdd.quantity = itemFromCart.quantity + 1;
    }
    else {
      itemToAdd.quantity = 1;
    }

    const updatedCart = cartItems.filter((product) => product.id !== id);
    console.log(itemToAdd);
    setCartItems([...updatedCart, itemToAdd]);
  };

  const deleteFromCart = (id) => {
    const updatedCart = cartItems.filter((product) => product.id !== id);
    setCartItems(updatedCart);
  };


  
  // Thank you alert

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      alert('Thank you for your purchase!');
      setCartItems([]);
    } else {
      alert('Please add an item to your cart.');
    }
  };

  return (
    <>
      {/* Header */}
      <Header openCart={openCart} />
      {/* Cover Page */}
      <Hero />
      {/* Cart */}
      <Cart closeCart={closeCart} showCart={showCart} data={cartItems} deleteFromCart={deleteFromCart} handlePurchase={handlePurchase} addToCart={addToCart} />
      {/* Product Grid */}
      <section className='products'>
        <h2>Products</h2>
        <Shop data={products} addToCart={addToCart} openCart={openCart} />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
