import './App.css';
import React, { useState } from 'react';

export default function Header({cartClick}) {

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
                        <i onClick={cartClick} className='bx bx-shopping-bag' id='cart-icon'></i>
                    </ul>
                </div>
            </nav>
        </header >
    )
}