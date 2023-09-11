import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Api from "./Api";
import Card from "./Card";
const DetailsCard = () => {
    const [apiTest, setapiTest] = useState([]);
    
    let category = 'shirt/white_shirt/';
    let product = '2';
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
         return (
             <>
             <body>
            <div className="product-style">
                <img className= "productimg" src = {apiTest.get_image} />
                <div className="">
                    <h1>Information</h1>
                    <p>Price: ${apiTest.price}</p>
                    <input />
                    <button />
                </div>
            </div>
            <div>
            <h1>{apiTest.name}</h1>
                <p>{apiTest.description}</p>
            </div>
            </body>
            </>
         )
}
export default DetailsCard;