import React from "react";
import Header from "./Header";
import Api from "./Api";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Products = () => {
    return( <>
        <Navbar />
    <div className = "body-background">
        
        <div className = "body-div ">
          <Api />
        </div>
    </div>
    </>
    )

    }

export default Products