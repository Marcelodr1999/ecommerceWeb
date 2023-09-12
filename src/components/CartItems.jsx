import React from 'react';
import { useCart } from './Cart';
import Navbar from './Navbar';
import CartButtons from './CartButtons';
const CartItems = () => {
  const { cart } = useCart();

  return (
    <>
    <Navbar />
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            <CartButtons item={item} />
            </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default CartItems;
