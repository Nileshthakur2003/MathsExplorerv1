import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LinearEquationTwo, LinearEquationThree, MatrixEquation, GeneralMatrixForm, MatrixEquationExample } from "./sleMathJax"; // Importing from the new MathJax file
import DropdownNav from '../dropdown';

const optionListData = ["Text", "Quiz", "Books/Refs.", "Further"];

const LinearAlgebraSLE = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className='flex flex-col mt-6'>
                <i aria-flowto='left'>MathsExplorer &gt; System of Linear Equations</i>
                <h1 className='text-2xl font-semibold mb-4'>System of Linear Equations</h1>
                <div className='flex flex-row justify-between items-center mb-4'>
                    <button className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 w-24"
                        onClick={() => window.history.back()}
                    >
                        ← Back
                    </button>
                    <div className='hidden md:flex space-x-3'>
                        <Link to="/" className='px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-base'>Link to Dashboard</Link>
                        <Link to="/" className='px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-base'>Take a test</Link>
                        <Link to="/" className='px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-base'>Request For Update</Link>
                    </div>
                    <div className='md:hidden relative'>
                        <button 
                            className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-base"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            Menu
                        </button>
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                                <Link to="/" className='block px-4 py-2 text-black hover:bg-blue-600 hover:text-white'>Link to Dashboard</Link>
                                <Link to="/" className='block px-4 py-2 text-black hover:bg-green-600 hover:text-white'>Take a test</Link>
                                <Link to="/" className='block px-4 py-2 text-black hover:bg-red-600 hover:text-white'>Request For Update</Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-row justify-center space-x-3 mb-4'>
                    <Link to="/text" className='px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Text</Link>
                    <Link to="/quiz" className='px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Quiz</Link>
                    <Link to="/books" className='px-3 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600'>Books/Refs.</Link>
                    <Link to="/further" className='px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600'>Further</Link>
                </div>
            </div>
            <div className='container-lg mt-10 justify-normal text-left'>
                <p>A system of linear equations (or linear system) is a collection of one or more linear equations involving the same variables:</p>
                <LinearEquationThree x="9" y="8" z="9" constant="0" />
                <p>
                    For example, consider the following system of linear equations:
                </p>
                <LinearEquationTwo x="3x" y="4y" constant="12" />
                <LinearEquationTwo x="5x" y="2y" constant="10" />
                <p>
                    This system consists of two equations with two variables, \( x \) and \( y \). The solution to the system is the set of values for the variables that satisfy all equations simultaneously. 
                    In this case, the solution can be found by various methods, such as substitution, elimination, or matrix operations.
                </p>
                <p>
                    The general form of a system of linear equations in matrix notation is:
                </p>
                <GeneralMatrixForm />
                <p>
                    Where A is the coefficient matrix,x is the column vector of variables, and b is the column vector of constants. 
                    For example, the above system of equations can be written in matrix form as:
                </p>
                <MatrixEquationExample />
                <p>
                    Solving a system of linear equations often involves finding the inverse of the coefficient matrix (if it exists) or using methods like Gaussian elimination.
                </p>
            </div>
        </>
    );
}

export default LinearAlgebraSLE;
