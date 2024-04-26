import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";
import { XYWholeSquared } from "../MathJaxComponents";

const activeTabColor = "purple";


const LinearAlgebraSLE = () =>{

    return(
        <>
        <h1>
           System of Linear Equations
        </h1>
        <div className='flex flex-auto rounded-none divide-x m-10'>
           <select className='px-5 py-1 rounded-lg'>
            <option className=''>Concepts</option>
            <option className=''>Tests</option>
            <option className=''>Books/Refs</option>
            <option className=''>Futher Reading</option>
           </select>
        
        </div>
        <div className='container-md'>
            Linear Algebra texts
        </div>

        </>
    );



}
export default LinearAlgebraSLE;