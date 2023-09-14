import React, { useState } from 'react';
import Navbar from './Navbar';
function RegistrationForm() {
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


    if (formData.password !== formData.password2) {
        console.log('Passwords do not match.');
        return;
      }
    const registrationData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
        first_name: formData.firstName,
        last_name: formData.lastName,
      };
      try {
        // Send registration data to the server
        const response = await fetch('http://127.0.0.1:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
    
        // Handle server response
        if (response.ok) {
          // Registration successful
          window.location.href = "http://localhost:5173/login";
          console.log('Registration successful. You can now log in.');
        } else {
          console.log("failed to register");
          const data = await response.json();
          if (data && data.error) {
            console.log(data.error); // Display the specific error message from the server.
          } else {
            console.log('Registration failed.'); // Display a generic error message.
          }
        }
      } catch (error) {
        console.error('Registration error:', error);
        console.log('Registration failed.');
      }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <div className='form-div'> 
        <h1>Register</h1>
       
        <input
        
          className="inputStyle"
          type="text"
          name="username"
          value={formData.username}
          placeholder='Username'
          onChange={handleChange}
        />

        <input
          className="inputStyle"
          type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          className="inputStyle"
          type="text"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          className="inputStyle"
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
   
        <input
          className="inputStyle"
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />

        <input
          className="inputStyle"
          type="password"
          name="password2"
          placeholder='Confirm Password'
          value={formData.password2}
          onChange={handleChange}
        />
      
      <button className='submitStyle' type="submit">Register</button>
      </div>
    </form>
    </>
  );
}

export default RegistrationForm;
