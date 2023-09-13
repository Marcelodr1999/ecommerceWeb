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

  <>
    
        <td>{item.productName}</td>
        <td>
        {item.quantity}  
          <button className="btn btn-danger btn-number" onClick={handleDecrease}>-</button>
          <button className="btn btn-success btn-number" onClick={handleIncrease}>+</button>
        
      
        </td>
        <td>${item.price}</td>
        <td><button className="btn btn-danger btn-number" onClick={handleRemove}>X</button></td>
   
        </>

  );
};

export default CartButtons;
