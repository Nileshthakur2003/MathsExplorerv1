import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet,Link } from "react-router-dom";
import { LinearEquationTwo,LinearEquationThree } from "./sleMathJax";

import DropdownNav from '../dropdown';


const activeTabColor = "purple";

const optionListData = ["Text","Quiz","Books/Refs.","Further"];

const LinearAlgebraSLE = () =>{

    return(
        <>
        <h1 className='sm:text-sm lg:text-2xl'>
           System of Linear Equations
        </h1>
        <br />
        <br/>
        

        <DropdownNav optionList={optionListData}/>
        <br/>
        <div className='container-lg mt-10 justify-normal text-left'>
        A system of linear equations (or linear system) is a collection of one or more linear equations involving the same variables
        <LinearEquationThree x="9" y="8" z="9" constant="0"/>
        </div>

        </>
    );



}
export default LinearAlgebraSLE;