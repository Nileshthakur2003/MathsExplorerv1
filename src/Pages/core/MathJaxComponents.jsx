import React from 'react';
import {MathJaxContext,MathJax} from 'better-react-mathjax';


export const MathComponent = () => {
    return (
        <MathJaxContext>
              <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
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

// export const Matrix = (a,b,c,d) =>{

//     return(
//         <MathJaxContext>
//             <MathJax>
//            {"$$\begin{pmatrix}a & b\\\ c & d\end{pmatrix}$$"}
//             </MathJax>
//         </MathJaxContext>
//     );
// }

