
import React from "react";
import {useEffect, useState} from "react";

const IdRetrieve = ({onRetrieveComplete}) => {
    const [userName, setuserName] = useState(null);
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        fetch(`http://127.0.0.1:8000/get-details`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Token ${localStorage.getItem('authToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            const userIdFromAPI = data.first_name;
            setuserName(userIdFromAPI);


            localStorage.setItem('userName', userIdFromAPI);
            if (typeof onRetrieveComplete === 'function') {
                onRetrieveComplete(userIdFromAPI);
              }
          });
      }, []);
return (
    <>
    {userName}
    </>
)
};

export default IdRetrieve;