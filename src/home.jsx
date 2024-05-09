
import React,{ useEffect, useState } from 'react'
import './App.css'
import {ImageBox, MEHeadingText, MainCard, SearchBox } from './CustomComponents'
import axios from "axios";
import cors from "cors";



const url = "http://localhost:3002";

let user = {};

function HomeCode() {
  const [count, setCount] = useState(0)

//const [loggedIn,setLogin] = useState(false)

console.log(url+'/checkIfLoggedIn')





  return (
    <>

    <div className='flex flex-col'>
    <MEHeadingText />
   
      <span className='flex flex-row p-10 justify-center'>
        <a href='/login/' className='flex flex-row'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

          Login / Register
        </a>
      </span>

  
    <div className='flex flex-row m-10 justify-evenly sm:justify-between mb-10'>
      <a href='/grapher/' className='flex flex-row p-2 border border-solid border-gray-300 rounded-md'> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        Grapher
    </a>


    <a href='/grapher/' className='flex flex-row p-2 border border-solid border-gray-300 rounded-md'> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        Solver
    </a>


    <a href='/grapher/' className='flex flex-row p-2 border border-solid border-gray-300 rounded-md'> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
        Contribute
    </a>


    </div>

    <SearchBox id="query" />

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-10 mt-10'>
      <MainCard content="Linear Algebra" url="/core/linearAlgebra"/>
      <MainCard content="Multivariable Calculus" url="/core/multivariable-calc" />
      <MainCard content="Sequences And Series" url="/core/sequence-series"/>
      <MainCard content="Statistics and Probablity" url="/core/stat-probablity"/>
    </div>
    </div>
    </>
  )
}

export default HomeCode
