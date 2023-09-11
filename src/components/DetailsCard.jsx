import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Api from "./Api";
import Card from "./Card";
export default function DetailsCard (props)  {
    const [apiTest, setapiTest] = useState([]);
    let { pslug } = props;
    let { s } = useParams();
    let category = '/23432/2/';
    let product = `${pslug}`;
   
    // console.log(pslug);
useEffect(() => {
   
  // Fetch the Payroll Data related to the logged in User
  fetch(`http://127.0.0.1:8000/products/products${product}`, {
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
}, []);
    
         return (
             
            <div>

                <h1>{apiTest.name}</h1>
                <p>{apiTest.description}</p>
                <p>{apiTest.price}</p>
            </div>

         )
}
// export default DetailsCard;