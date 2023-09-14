import React from 'react';
import CartItems from './CartItems';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        items: [],
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const updateItems = (items) => {
        setFormData({ ...formData, items });
      };


      const handleSubmit = async (e, itemsForCheckout) => {
        e.preventDefault();

      const cartCheck = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        zipcode: formData.zip,
        items: [ {
          "product": 2,
          "quantity": 1 ,
          "price": 50
      }]
        
      }
      console.log(cartCheck)
      try {
        // Send registration data to the server
        const response = await fetch('http://127.0.0.1:8000/order/checkout/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `TOKEN ${localStorage.getItem('authToken')}`
          },
          body: JSON.stringify(cartCheck),
        });
    
        // Handle server response
        if (response.ok) {
          // Registration successful
          window.location.href = "http://localhost:5173/";
          console.log('Order successful.');
        } else {
          console.log("failed to order");
          const data = await response.json();
          if (data && data.error) {
            console.log(data.error); // Display the specific error message from the server.
          } else {
            console.log('Order failed.'); // Display a generic error message.
          }
        }
      } catch (error) {
        console.error('Order error:', error);
        console.log('order failed.');
      }
  };


  return (
    <>

    <div>
    <CartItems onCheckout={updateItems} />


    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='form-row'> 
      
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input
            id='fname'
              className="form-control"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
        <label>Last Name:</label>
        <input
          className="form-control"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        </div>
        </div>
      <div className="form-row">
       
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor = "phone" >Phone:</label>
          <input
            id="phone"
            className="form-control"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          </div>
      </div>
      <div className='form-row'>
      <div className='form-group'>
        <label>Address:</label>
        <input
          className="form-control"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        </div>
        <div className='form-group'>

        <label>Zip Code:</label>
        <input
          className="form-control"
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        </div>  
      </div>
      <button className='submitStyle' type="submit">Order</button>
     
    </form>
    </div>
    </>
  );
};

export default Checkout;
