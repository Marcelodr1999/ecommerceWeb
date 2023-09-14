import React, { useState } from 'react';
import authService from '../services/authService';
import IdRetrieve from '../services/idService';
function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLoginSuccess = (token) => {
    // Store the token in localStorage
    localStorage.setItem('authToken', token);
    window.location.href = "http://localhost:5173";


  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(formData.username, formData.password);

      if (response.token) {
        handleLoginSuccess(response.token);
        IdRetrieve();
      } else {
        // Handle login failure (e.g., display an error message).
        console.log("Invalid Credentials");
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-div">
        <label>Username or Email:</label>
        <input
          className="inputStyle"
          type="text"
          name="username"
          value={formData.username}
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
      
      <button className="submitStyle" type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
