import React from 'react';
import { useCart } from './Cart';
import Navbar from './Navbar';
import CartButtons from './CartButtons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const MyOrder = ({ onCheckout }) => {
    const [orderList, setorderList] = useState([]);
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        fetch(`http://127.0.0.1:8000/order/orders/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                  Authorization: `Token ${localStorage.getItem('authToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
          setorderList(data)
          });
      }, []);
        let newList = orderList.filter((list) => list.first_name == localStorage.getItem('userName'));

  return (
    <>
    <Navbar />
    
   
      <h2>Your Orders</h2>

      <table className="cartTable">
        <tbody>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
  
       {newList.length > 0 ? (
        newList.map((order) =>
          order.items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td> {/* Add your remove button here */}</td>
            </tr>
          ))
        )
      ) : (
      <tr>
        <td colSpan="4">No items in the list</td>
      </tr>
    )}
        
        </tbody>
     </table>

      



    </>
  );
};

export default MyOrder;
