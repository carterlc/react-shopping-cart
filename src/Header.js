import './App.css';
import React from 'react';

export default function Header({openCart, cartCount}) {
    console.log('--------- here------');
    console.log(cartCount);
    return (
        <header>
            <nav>
                <div>
                    <h1>SnowBound</h1>
                </div>
                <div className='topnav-links'>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Search</a></li>
                        <i onClick={openCart} className='bx bx-shopping-bag' id='cart-icon'><span className='cart-count'>({cartCount})</span></i>
                    </ul>
                </div>
            </nav>
        </header >
    )
}