import './App.css';
import React, { useState } from 'react';
import Product from './Product'


const Shop = ({data}) => {
    console.log(data);
    return (
        <div className='product-grid'>
            {
                data.jackets.map((product) => {
                    console.log(data);
                    return (
                        <Product data={product}/>
                    )
                })

            }

        </div>
    )
}

export default Shop;