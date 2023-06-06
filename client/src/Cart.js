import React from "react";
import { useSelector } from "react-redux";


function Cart() {
  const cart = useSelector(state => state.cart)
  
  return (
    <div className="checkout">
      <div className="checkout_items">
        {cart.cart.map(item => {
          return (
            <div className='checkout_product'>
              <img src={item.image} alt=""/>
              <div className='product_info'>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <button>Remove from cart</button>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h2>Subtotal</h2>
      </div>
    </div>
  );
};

export default Cart;
