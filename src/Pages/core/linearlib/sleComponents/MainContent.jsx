import React from 'react';
import { LinearEquationTwo, LinearEquationThree, GeneralMatrixForm, MatrixEquationExample } from "../sleMathJax"; // Importing from the new MathJax file

const MainContent = () => {
    return (
        <div className='container-lg mt-10 justify-normal text-justify'>
            <p>A system of linear equations (or linear system) is a collection of one or more linear equations involving the same variables:</p>
            <div className='text-center my-4'>
                <LinearEquationThree x="9" y="8" z="9" constant="0" />
            </div>
            <p>
                For example, consider the following system of linear equations:
            </p>
            <div className='text-center my-4'>
                <LinearEquationTwo x="3x" y="4y" constant="12" />
                <LinearEquationTwo x="5x" y="2y" constant="10" />
            </div>
            <p>
                This system consists of two equations with two variables, \( x \) and \( y \). The solution to the system is the set of values for the variables that satisfy all equations simultaneously. 
                In this case, the solution can be found by various methods, such as substitution, elimination, or matrix operations.
            </p>
            <p>
                The general form of a system of linear equations in matrix notation is:
            </p>
            <div className='text-center my-4'>
                <GeneralMatrixForm />
            </div>
            <p>
                Where A is the coefficient matrix, x is the column vector of variables, and b is the column vector of constants. 
                For example, the above system of equations can be written in matrix form as:
            </p>
            <div className='text-center my-4'>
                <MatrixEquationExample />
            </div>
            <p>
                Solving a system of linear equations often involves finding the inverse of the coefficient matrix (if it exists) or using methods like Gaussian elimination.
            </p>
        </div>
    );
}

export default MainContent;
