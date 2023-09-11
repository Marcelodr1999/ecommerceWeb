import React from "react";
import {useEffect, useState} from "react";
import Card from "./Card";
import DetailsCard from "./DetailsCard";
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
<>
    
               <Card
                key={run.id}
                title={run.name}
                images={run.get_image}
                description={run.description}
                newPrice={run.price}
                pslug={run.get_absolute_url}
                alt='black'
                dollar="$"
        />
           
        <DetailsCard pslug = {run.get_absolute_url}/>
        </>
         );
         
    return( 
        <div className="runs-wrapper bg-white rounded-xl h-full w-48 shadow-sx-shadow p-4 flex flex-col">
                    <h1 className="border-b-2 pb-4">Payroll Runs</h1>
                    <div className="row">
                        {runItems}
                        </div>
                </div>
    )


} 
export default Api