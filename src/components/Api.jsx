import React from "react";
import {useEffect, useState} from "react";
import Card from "./Card";
import { useParams, Link } from "react-router-dom";
const Api = () => {
    const [apiTest, setapiTest] = useState([]);
 
    
useEffect(() => {

  // Fetch the Payroll Data related to the logged in User
  fetch(`http://127.0.0.1:8000/products/latest-products/`, {
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
const runItems = apiTest.map((run) =>

    
               <Card
               
                key={run.id}
                title={run.name}
                images={run.get_image}
                description={run.description}
                newPrice={run.price}
                productslug={run.get_absolute_url}
                alt='black'
                dollar="$"
        />
           
        
         );

    const uniqueCategories = new Set();
    apiTest.map((cats) => {
      let prodslugs = cats.get_absolute_url.split('/');
      let categories = prodslugs[1];
      uniqueCategories.add(categories);    

    });
    const uniqueCategoriesArray = Array.from(uniqueCategories);
    return ( 
        <div className="runs-wrapper bg-white rounded-xl h-full w-48 shadow-sx-shadow p-4 flex flex-col">
                    <h1 className="border-b-2 pb-4">Filter</h1>
                    <ul>

                     {uniqueCategoriesArray.map((category) => (
                      <li key={category}>
                        <Link to={`/${category}`}>{category}</Link>
                      </li>
                      ))}

                    </ul>
                    <div className="row">
                        {runItems}
                    </div>

        </div>
    )


} 
export default Api