import './App.css';
import React, { useState } from 'react';
import Product from './Product'


const Shop = ({data, addToCart, openCart}) => {
    // console.log(data);
    return (
        <div className='product-grid'>
            {
                data.jackets.map((product) => {
                    return (
                        <Product data={product} addToCart={addToCart} openCart={openCart}/>
                    )
                })

            }

        </div>
    )
}

export default Shop;