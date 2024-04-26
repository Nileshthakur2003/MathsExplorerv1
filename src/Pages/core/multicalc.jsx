import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";

const MultiCalc = () =>{

    return(
        <>
        <h1>
            MathsExplorer &gt; Multivariable Calculus
        </h1>
        <p className="text-xl m-10">
        Multivariable Calculus contents here...
        </p>
        <button className='m-10'><Link to="/">Link to Dashboard</Link></button>
      
        
        </>
    );
}

export default MultiCalc;