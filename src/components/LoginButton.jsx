import React from 'react';
import { Link } from 'react-router-dom'; 
function LoginButton() {
    
  return (
    <>
    <Link to="/login"><button className='btn btn-outline-success ml-2 my-2 my-sm-0'>Login</button></Link>
    <Link to="/register"><button className='btn btn-outline-success ml-2 my-2 my-sm-0'>Register</button></Link>
    </>
  );
}

export default LoginButton;
