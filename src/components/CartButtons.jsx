import React from 'react';
import { useCart } from './Cart';

const CartButtons = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    increaseQuantity(item.productId);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.productId);
  };

  const handleRemove = () => {
    removeItem(item.productId);
  };

  return (
    <div>
      <h3>{item.productName}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartButtons;
