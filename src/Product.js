import './App.css';
import React, { useState } from 'react';
// import products from './Products.json';

const Product = (props) => {
    const { id, name, description, price, image } = props.data;
    console.log(description)
    return (
        <div className='product'>
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='price-wrapper'>
                <span>C${price}</span>
                <button className='product-button'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;










{/* < img src="https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Snowboarding/Snowboard%20Jackets/Burton%20AK%202L%20Gore-Tex%20Swash%20snowboard%20jacket.jpg" alt="Snowboarding Jacket" />
            <h3>Snowboard Jacket</h3>
            <p>Men White Dotted</p>
            <div className='price-wrapper'>
                <span className='price'>$329 CAD</span>
                <button className='product-button'>Add to Cart</button>
            </div> */}