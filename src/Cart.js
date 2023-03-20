import './App.css';
import React, { useState } from 'react';
import CartProduct from './CartProduct';

export default function Cart({ closeCart, showCart, data, deleteFromCart, handlePurchase }) {

  const total = data.reduce((acc, item) => acc + item.price, 0);

  

  return (
    <div className={`cart ${showCart ? 'active' : ''}`}>
      <i onClick={closeCart} className='bx bx-x' id="close-cart"></i>
      <h2 className='cart-title'>Your Cart</h2>
      <div className='scrollable'>
        {
          data.map((product => {
            return (
              <CartProduct data={product} deleteFromCart={deleteFromCart}/>
            )
          }))
        }
      </div>
      <div className='total'>
        <div className='total-title'>Total</div>
        <div className='total-price'>C${total}</div>
      </div>
      <button type="button" className="btn-buy" onClick={handlePurchase}>Buy Now</button>
      <button type="button" className="btn-apple"onClick={handlePurchase}>Purchase with Apple Pay</button>
    </div>
  )
}
