import './App.css';
import React  from 'react';
import CartProduct from './CartProduct';

export default function Cart({ closeCart, showCart, data, deleteFromCart, handlePurchase, addToCart, minusOneItem }) {

  const total = data.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <div className={`cart ${showCart ? 'active' : ''}`}>
      <i onClick={closeCart} className='bx bx-x' id="close-cart"></i>
      <h2 className='cart-title'>Your Cart</h2>
        {
          data.map((product => {
            return (
              <CartProduct key={product.id} data={product} deleteFromCart={deleteFromCart} addToCart={addToCart} minusOneItem={minusOneItem}/>
            )
          }))
        }
      <div className='total'>
        <div className='total-title'>Total</div>
        <div className='total-price'>C${total}</div>
      </div>
      <button type="button" className="btn-buy" onClick={handlePurchase}>Buy Now</button>
      <button type="button" className="btn-apple"onClick={handlePurchase}>Purchase with Apple Pay</button>
    </div>
  )
}
