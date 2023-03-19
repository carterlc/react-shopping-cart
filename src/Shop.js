import './App.css';
import React, { useState } from 'react';
import Product from './Product'


const Shop = ({data, addToCart}) => {
    // console.log(data);
    return (
        <div className='product-grid'>
            {
                data.jackets.map((product) => {
                    return (
                        <Product data={product} addToCart={addToCart} />
                    )
                })

            }

        </div>
    )
}

export default Shop;