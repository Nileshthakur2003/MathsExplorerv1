import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";

const linearAlgebra = () =>{

    return(
        <>
        <h1>
            MathsExplorer &gt; Linear Algebra
        </h1>
        <p className="text-xl m-10">
            Linear Algebra contents here...
        </p>
        <button className='m-10'><Link to="/">Link to Dashboard</Link></button>
      
        
        </>
    );
}

export default linearAlgebra;