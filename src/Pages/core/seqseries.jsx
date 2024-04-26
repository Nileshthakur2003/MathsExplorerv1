import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";

const SeqSeries = () =>{

    return(
        <>
        <h1>
            MathsExplorer &gt; Sequence And Series
        </h1>
        <p className="text-xl m-10">
        Sequence And Series contents here...
        </p>
        <button className='m-10'><Link to="/">Link to Dashboard</Link></button>
      
        
        </>
    );
}

export default SeqSeries;