import React from "react";
import Header from "./Header";
import Api from "./Api";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    return( <>
        <Navbar />
    <div className = "body-background">
        <div className= "landingStyle"> 
        <h1 className="landingText">Welcome to this site.</h1>
        <h2>What's New!</h2>
        </div>
        <div className = "body-div ">
          <Api />
        </div>
    </div>
    </>
    )

    }

export default Products