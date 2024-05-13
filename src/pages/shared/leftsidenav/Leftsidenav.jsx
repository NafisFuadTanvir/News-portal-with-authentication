import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {

  const [catagorys,setCatagorys]= useState([]);

    
  useEffect(()=>{
     
    fetch("categories.json")
    .then(res=>res.json())
    .then(data=>setCatagorys(data))


  },[])


  return (
    <div className="p-4 space-y-7">
      <h2 className="font-bold">All Catagory</h2>

      {
          
          catagorys.map(catagory=> <Link className="block text-center space-y-7 "
          
          to="{`/catagory/${catagory.id}`}"
          
          key={catagory.id}>{catagory.name}</Link> )

      }
       
      
    </div>
  );
};

export default Leftsidenav;
