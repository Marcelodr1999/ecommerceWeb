import React from "react";
import Navbar from "../components/Navbar";
import DetailsCard from "../components/DetailsCard";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
function FilteredPage () {
    let { cat } = useParams();
    return <>
        
       <Products />
    These are {cat}       

    </>
}

export default FilteredPage