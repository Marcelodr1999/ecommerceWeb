import React from 'react';
import { useCart } from './Cart';
import Navbar from './Navbar';
import CartButtons from './CartButtons';
import { Link } from 'react-router-dom';
const CartItems = ({ onCheckout }) => {

  const { cart } = useCart();

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price , 0);
  };

  // Calculate the total price
  const total = calculateTotalPrice(cart);
  const isAuthenticated = localStorage.getItem('authToken');

  const handleCheckout = () => {

    const itemsForCheckout = cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
      name: item.productName, 
    }));
     console.log('onCheckout prop:', itemsForCheckout);
     onCheckout(itemsForCheckout);
     console.log('onChec:', onCheckout);
  };
  return (
    <>
    <Navbar />
    
   
      <h2>Your Cart</h2>
      <table className="cartTable">
        <tbody>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
        {cart.map((item) => (
          <tr  key={item.productId}>
            <CartButtons item={item} />
            </tr>
        ))}
        </tbody>
     </table>


      
      <p>Total Price: ${total.toFixed(2)}</p>


      {isAuthenticated ? (
   <Link to="/Checkout">
            <button className="btn btn-outline-dark" onClick={handleCheckout}>Checkout</button>
            </Link>
  
        ) : (
          <Link to="/login">
            <button>Login to Checkout</button>
          </Link>
      )}
 
    </>
  );
};

export default CartItems;
