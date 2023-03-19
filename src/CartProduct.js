import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const CartProduct = ({product, delete}) => {
    const { id, name, description, price, image } = product.data;
    
    return (
        <div className='cart-content' key={id}>
            <div className='cart-box'>
                <img src={image} />
                <div className='cart-details'>
                    <div className='cart-product-title'>{name}</div>
                    <div className='cart-product-price'>C${price}</div>
                    <div className='input-and-icon'>
                        <input type="number" value="1" className="cart-quantity"></input>
                        <i className='bx bx-trash cart-remove' onClick={deleteFromCart}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;
