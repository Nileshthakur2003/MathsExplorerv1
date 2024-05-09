import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";
import { TopicLink } from "./further";
import { useState } from "react";






const all_topics = [{
    "topic_id":"sle",
    "topic_name":"Systems of linear equations",
    "url":"/sle"
},{
    "topic_id":"rref",
    "topic_name":"Row reduction and echelon forms",
    "url":"/rref"
},{
    "topic_id":"moii",
    "topic_name":"Matrix operations, including inverses",
    "url":"/moii"
},{
    "topic_id":"blkm",
    "topic_name":"Block matrices",
    "url":"/blkm"
},{
    "topic_id":"ldid",
    "topic_name":"Linear dependence and independence",
    "url":"/ldid"
},{
    "topic_id":"sbd",
    "topic_name":"Subspaces and bases and dimensions",
    "url":"/sbd"
},{
    "topic_id":"obop",
    "topic_name":"Orthogonal bases and orthogonal projections",
    "url":"/obop"
},{
    "topic_id":"gsp",
    "topic_name":"Gram-Schmidt process",
    "url":"/gsp"
},{
    "topic_id":"dtp",
    "topic_name":"Determinants and their properties",
    "url":"/sle"
},{
    "topic_id":"cr",
    "topic_name":"Cramer’s Rule",
    "url":"/sle"
},{
    "topic_id":"ee",
    "topic_name":"Eigenvalues and eigenvectors",
    "url":"/sle"
},{
    "topic_id":"doam",
    "topic_name":"Diagonalization of a matrix",
    "url":"/sle"
},{
    "topic_id":"sym",
    "topic_name":"Symmetric matrices",
    "url":"/sle"
},{
    "topic_id":"pdm",
    "topic_name":"Positive definite matrices",
    "url":"/sle"
},{
    "topic_id":"sm",
    "topic_name":"Similar matrices",
    "url":"/sle"
},{
    "topic_id":"lt",
    "topic_name":"Linear transformations",
    "url":"/sle"
},{
    "topic_id":"svd",
    "topic_name":"Singular Value Decomposition",
    "url":"/sle"
}]
const LinearAlgebra = () =>{

    const [topics,setTopics] = useState(all_topics);

    function updateTopics(e){
        const data  = e.target.value;
       const temp =  all_topics.filter((obj)=>(
            obj.topic_name.toLowerCase().includes(data.toLowerCase())
        ))
        setTopics(temp);
        
    }


    return(
        <>
        <div className='flex flex-col mt-10'>
        <i aria-flowto='left'>MathsExplorer &gt; LinearAlgebra</i>
        <h1>
            Linear Algebra
        </h1>
        </div>
        <div className='flex flex-row mt-10 justify-between'>
        <button><Link to="/" className='flex-shrink'>&lt; Dashboard</Link></button>
            <div class="flex">
            <input onKeyDown={(e)=>updateTopics(e)} className="shadow appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="search-query" type="text" placeholder="Filter Contents..."/>
            </div>
        </div>
        <p className="text-xl m-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row">
           {
            topics.map((obj)=>(
                <TopicLink text={obj.topic_name} id={obj.topic_id} url="./sle"/>
            ))
           }
            </div>
        </p>
    <p className='flex flex-grow w-full justify-between'>
        <button className=''><Link to="/">Link to Dashboard</Link></button>
        <button className=''><Link to="/">Take a test</Link></button>
        <button className=''><Link to="/">Request For Update</Link></button>
      
        </p>
        
        
        </>
    );
}




export default LinearAlgebra;