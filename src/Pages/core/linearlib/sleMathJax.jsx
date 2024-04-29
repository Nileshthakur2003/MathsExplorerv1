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
