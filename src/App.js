import './App.css';
import React, { useState } from 'react';
import Header from './Header';
// let shoppingBag = document.getElementById('cart-icon');
// let cart = document.querySelector('.cart');
// let closeCart = document.getElementById('close-cart');
// // Open the cart
// shoppingBag.onclick = () => {
//   cart.classList.add("active");
// };
// // Close the cart
// closeCart.onclick = () => {
//   cart.classList.remove("active");
// };


function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <body>
        {/* Header */}
        <Header />
        {/* Cover Page */}
        <div className='hero'>
          <div className='cta'>
            <h2>SnowBound</h2>
            <p>Bound to the snow, free to explore</p>
            <button>Shop Now</button>
          </div>
        </div>

        {/* Cart */}
        <div className={`cart ${showCart ? 'active' : ''}`}>
          <h2 className='cart-title'>Your Cart</h2>
          <div className='cart-content'>
            <div className='cart-box'>
              <img src="https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Snowboarding/Snowboard%20Jackets/Burton%20AK%202L%20Gore-Tex%20Swash%20snowboard%20jacket.jpg" alt="Snowboarding Jacket" />
              <div className='cart-details'>
                <div className='cart-product-title'>Snowboard Jacket</div>
                <div className='cart-product-price'>$329 CAD</div>
                <div className='input-and-icon'>
                  <input type="number" value="1" className="cart-quantity"></input>
                  <i className='bx bx-trash cart-remove'></i>
                </div>
                <div className='total'>
                  <div className='total-title'>Total</div>
                  <div className='total-price'>$0</div>
                </div>

                {/* Purchase */}
                <i  onClick={ () => setShowCart(false)} className='bx bx-x' id="close-cart"></i>
              </div>
            </div>
            <button type="button" className="btn-buy">Buy Now</button>
            <button type="button" className="btn-apple">Purchase with Apple Pay</button>
          </div>
        </div>

        {/* Product Grid */}
        <section className='products'>
          <h2>Products</h2>
          <div className='product-grid'>
            <div className='product'>
              <img src="https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Snowboarding/Snowboard%20Jackets/Burton%20AK%202L%20Gore-Tex%20Swash%20snowboard%20jacket.jpg" alt="Snowboarding Jacket" />
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <div className='price-wrapper'>
                <span className='price'>$329 CAD</span>
                <button className='product-button'>Add to Cart</button>
              </div>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
            <div className='product'>
              <img></img>
              <h3>Snowboard Jacket</h3>
              <p>Men White Dotted</p>
              <span className='price'>$329 CAD</span>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div>
            <h4>Follow us</h4>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><a href="#">Mission Statement</a></li>
            </ul>
          </div>
          <div>
            <h4>Location</h4>
            <ul>
              <li>Canada</li>
              <li>United States</li>
              <li>UK</li>
            </ul>
          </div>
        </footer>

      </body>
    </>
  );
}

export default App;
