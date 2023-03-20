import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const CartProduct = ({ data, deleteFromCart }) => {
    const { id, name, description, price, image } = data;

    return (
        <div className='cart-content' key={id}>
            <div className='cart-box'>
                <img src={image} />
                <div className='cart-details'>
                    <div className='cart-product-title'>{name}</div>
                    <div className='cart-product-price'>C${price}</div>
                    <div className='plus-minus'>
                        <button className='plus'>+</button>
                        <div className='total-product'>0</div>
                        <button className='minus'>-</button>
                        <i className='bx bx-trash cart-remove' onClick={() => deleteFromCart(id)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;
