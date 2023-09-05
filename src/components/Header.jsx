import React from "react";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";
const Header = () => {
    return( 
        <header className = "main-header">
        <div className = "header-div">
            <ul className = "main-nav">
                <li>Shopping Site</li>
                <Navbar />
          
            </ul>
            
        </div>
    </header>
    )

    }

export default Header