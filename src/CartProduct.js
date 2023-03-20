import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const CartProduct = ({ data, deleteFromCart, addToCart }) => {
    const { id, name, description, price, image, quantity } = data;

    const updateCart = () => {

    }    

    return (
        <div className='cart-content' key={id}>
            <div className='cart-box'>
                <img src={image} />
                <div className='cart-details'>
                    <div className='cart-product-title'>{name}</div>
                    <div className='cart-product-price'>C${price}</div>
                    <div className='plus-minus'>
                        <button className='plus' onClick={() => addToCart(id)}>+</button>
                        <div className='total-product'>{quantity}</div>
                        <button className='minus' onClick={() => deleteFromCart(id)}>-</button>
                        <i className='bx bx-trash cart-remove' onClick={() => deleteFromCart(id)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;
