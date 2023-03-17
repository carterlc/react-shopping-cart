import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const CartProduct = (props) => {
    const {  name, description, price, image } = props.data;
    return (
        <div className='cart-content'>
        <div className='cart-box'>
          <img src={image}/>
          <div className='cart-details'>
            <div className='cart-product-title'>{name}</div>
            <div className='cart-product-price'>C${price}</div>
            <div className='input-and-icon'>
              <input type="number" value="1" className="cart-quantity"></input>
              <i className='bx bx-trash cart-remove'></i>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartProduct;
