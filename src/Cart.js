import './App.css';
import React, { useState } from 'react';

export default function Cart({closeCart,showCart}) {

    return (
        <div className={`cart ${showCart ? 'active' : ''}`}>
          <h2 className='cart-title'>Your Cart</h2>
          <div className='cart-content'>
            <div className='cart-box'>
              <img src="https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Snowboarding/Snowboard%20Jackets/Burton%20AK%202L%20Gore-Tex%20Swash%20snowboard%20jacket.jpg" alt="Snowboarding Jacket" />
              <div className='cart-details'>
                <div className='cart-product-title'>Snowboard Jacket</div>
                <div className='cart-product-price'>$329 CAD</div>
                <div className='input-and-icon'>
                  <input type="number" value="1" className="cart-quantity"></input>
                  <i className='bx bx-trash cart-remove'></i>
                </div>
                <div className='total'>
                  <div className='total-title'>Total</div>
                  <div className='total-price'>$0</div>
                </div>
                <i onClick={closeCart} className='bx bx-x' id="close-cart"></i>
              </div>
            </div>
            <button type="button" className="btn-buy">Buy Now</button>
            <button type="button" className="btn-apple">Purchase with Apple Pay</button>
          </div>
        </div>
    )
}