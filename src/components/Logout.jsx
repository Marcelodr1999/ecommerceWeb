import React from 'react';
import LoginButton from './LoginButton';

function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = "http://localhost:5173/login";

  };

  // Check if a token is present in localStorage
  const isAuthenticated = localStorage.getItem('authToken');

  // Conditionally render the login or logout button
  if (isAuthenticated) {
    return (
      <button className="btn btn-outline-danger ml-2 my-2 my-sm-0" onClick={handleLogout}>Logout</button>
    );
  } else {
    return (
      <LoginButton />
    );
  }
}

export default LogoutButton;
