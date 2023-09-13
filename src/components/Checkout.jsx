import React from 'react';
import CartItems from './CartItems';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      }
  return (
    <>

    <div>
      <CartItems />
      <form onSubmit={handleSubmit}>
      <div className='form-div'> 
        <label>Username:</label>
        <input
          className="inputStyle"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>First Name:</label>
        <input
          className="inputStyle"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label>Last Name:</label>
        <input
          className="inputStyle"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          className="inputStyle"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
   
        <label>Password:</label>
        <input
          className="inputStyle"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>Confirm Password:</label>
        <input
          className="inputStyle"
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
        />
      
      <button className='submitStyle' type="submit">Register</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default Checkout;
