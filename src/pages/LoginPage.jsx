import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
function LoginPage() {
  return (
    <div>
        <Navbar />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;


