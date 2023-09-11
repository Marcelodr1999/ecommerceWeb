import React from "react";
import Navbar from "../components/Navbar";
import DetailsCard from "../components/DetailsCard";
import { useParams } from "react-router-dom";
function ProductDetail () {
    let { slug } = useParams();
    return <div>
        <Navbar />
        
        <DetailsCard />
    </div>
}

export default ProductDetail