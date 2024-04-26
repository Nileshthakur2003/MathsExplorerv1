import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";

const StatProb = () =>{

    return(
        <>
        <h1>
            MathsExplorer &gt; Statistics & Probablity
        </h1>
        <p className="text-xl m-10">
        Statistics And Probablity contents here...
        </p>
        <button className='m-10'><Link to="/">Link to Dashboard</Link></button>
      
        
        </>
    );
}

export default StatProb;