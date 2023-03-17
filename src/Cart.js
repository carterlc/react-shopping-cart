import './App.css';
import React, { useState } from 'react';
import CartProduct from './CartProduct';

export default function Cart({ closeCart, showCart, data }) {
  console.log(data)
  return (
    <div className={`cart ${showCart ? 'active' : ''}`}>
      <i onClick={closeCart} className='bx bx-x' id="close-cart"></i>
      <h2 className='cart-title'>Your Cart</h2>
      <div className='scrollable'>
        {
          data.jackets.map((product => {
            return (
              <CartProduct data={product} />
            )
          }))
        }
      </div>
      <div className='total'>
        <div className='total-title'>Total</div>
        <div className='total-price'>C$0</div>
      </div>
      <button type="button" className="btn-buy">Buy Now</button>
      <button type="button" className="btn-apple">Purchase with Apple Pay</button>
    </div>
  )
}
