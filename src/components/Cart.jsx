import React, { createContext, useContext, useState } from 'react';
const Cart = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
  
    const addToCart = (productId, productPrice, productName) => {
        const existingItemIndex = cart.findIndex((item) => item.productId === productId);

        if (existingItemIndex !== -1) {
            // If the product is already in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            updatedCart[existingItemIndex].price = updatedCart[existingItemIndex].quantity * productPrice; // Update total price

            setCart(updatedCart);
          } else {
            // If the product is not in the cart, add it as a new item
            setCart([...cart, { productId, quantity: 1,  price: productPrice, productName}]);
          }
    };
    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => {
          if (item.productId === productId) {
            // Calculate the price of a single unit
            const unitPrice = parseFloat(item.price) / item.quantity;
      
            return {
              ...item,
              quantity: item.quantity + 1,
              price: parseFloat(item.price) + unitPrice, // Update total price
            };
          }
          return item;
        });
        setCart(updatedCart);
      };
      
      const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) => {
          if (item.productId === productId) {
            // Calculate the price of a single unit
            const unitPrice = item.price / item.quantity;
      
            return {
              ...item,
              quantity: Math.max(item.quantity - 1, 0), // Ensure quantity doesn't go below zero
              price: Math.max(item.price - unitPrice, 0), // Update total price
            };
          }
          return item;
        }).filter((item) => item.quantity > 0); // Remove items with quantity zero
      
        setCart(updatedCart);
      };
      
      const removeItem = (productId) => {
        const updatedCart = cart.filter((item) => item.productId !== productId);
        setCart(updatedCart);
      };
                  
    return (
      <Cart.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeItem }}>
        {children}
      </Cart.Provider>
    );
  }
  
  export function useCart() {
    return useContext(Cart);
  }