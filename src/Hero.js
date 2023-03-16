import './App.css';
import React, { useState } from 'react';

export default function Hero() {

    const [showCart, setShowCart] = useState(false);

    return (
        <div className='hero'>
            <div className='cta'>
                <h2>SnowBound</h2>
                <p>Bound to the snow, free to explore</p>
                <button>Shop Now</button>
            </div>
        </div>
    )
}