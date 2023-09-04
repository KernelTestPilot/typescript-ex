import React, { useState, useEffect } from "react";
import { fetchPeople } from "../Types/User";
const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const apiUrl = "/api/people"; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data); 
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
return (

<div>
<p> hej</p>

</div>)
};

export default People;