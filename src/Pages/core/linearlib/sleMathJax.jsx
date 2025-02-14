import React from 'react';
import {MathJaxContext,MathJax} from 'better-react-mathjax';


export const LinearEquationTwo = (props) => {
    return (

        <MathJaxContext>
              <MathJax>{`\\(\\ `+props.x+`x + `+props.y+`b = e\\)`}</MathJax>
        </MathJaxContext>
    );

};

export const LinearEquationThree = (props) => {
    return (

        <MathJaxContext>
              <MathJax>{`\\(\\ `+props.x+`x + `+props.y+`y + `+props.z+`z = `+props.constant+` \\)`}</MathJax>
        </MathJaxContext>
    );

};

export const XYWholeSquared = () => {
      return (
        <MathJaxContext>
            <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>
      );
};





export const MatrixEquationExample = () => {
    const equation = `
    \\begin{bmatrix}
    3 & 4 \\\\
    5 & 2 
    \\end{bmatrix}
    \\begin{bmatrix}
    x \\\\
    y 
    \\end{bmatrix}
    =
    \\begin{bmatrix}
    12 \\\\
    10 
    \\end{bmatrix}
    `;
    return (
        <MathJax.Context input='ascii'>
            <div>
                <MathJax.Node>{equation}</MathJax.Node>
            </div>
        </MathJax.Context>
    );
};



export const MatrixEquation = () => {
    const equation = `
    \\begin{bmatrix}
    3 & 4 \\\\
    5 & 2 
    \\end{bmatrix}
    \\begin{bmatrix}
    x \\\\
    y 
    \\end{bmatrix}
    =
    \\begin{bmatrix}
    12 \\\\
    10 
    \\end{bmatrix}
    `;
    return (
        <MathJax.Context input='ascii'>
            <div>
                <MathJax.Node>{equation}</MathJax.Node>
            </div>
        </MathJax.Context>
    );
};

export const GeneralMatrixForm = () => {
    const equation = `A \\mathbf{x} = \\mathbf{b}`;
    return (
        <MathJax.Context input='ascii'>
            <div>
                <MathJax.Node>{equation}</MathJax.Node>
            </div>
        </MathJax.Context>
    )}