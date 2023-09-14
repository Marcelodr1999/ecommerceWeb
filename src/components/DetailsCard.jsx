import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useCart } from "./Cart";
const DetailsCard = () =>  {
    const [apiTest, setapiTest] = useState([]);
    let { productslug } = useParams();
useEffect(() => {
   
    // console.log(productslug)
  // Fetch the Payroll Data related to the logged in User
  fetch(`http://127.0.0.1:8000/products/products${productslug.replaceAll('_', '/')}`, {
      method: 'GET',  
      headers: {
          'Content-Type': 'application/json',
        //    Authorization: `Token ${localStorage.getItem('token')}`
      },
  })
  .then(res => res.json())
  .then(data => {
    setapiTest(data)
    });
}, [productslug]);

// const [cart, setCart] = useState([]);
const { addToCart } = useCart();

const addToCartHandler = () => {
    addToCart(apiTest.id, apiTest.price, apiTest.name); // Pass the product ID to addToCart
  };
  
         return (
             <>
            <div className="product-style">
                <img className= "productimg" src = {apiTest.get_image} />
                <div className="form-group">
                    <h1>Information</h1>
                    
                    <p>Price: ${apiTest.price}</p>
                    <input className="form-control-sm" defaultValue = "1"/><br />
                    <button className="btn btn-success mt-1" onClick = {addToCartHandler}>Add To Cart</button>
                </div>
            </div>
            <div>
            <h1>{apiTest.name}</h1>
                <p>{apiTest.description}</p>
            </div>
            </>
         )
}
 export default DetailsCard;