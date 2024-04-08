import React, { useEffect } from 'react';

const MathJaxConfig = () => {
  useEffect(() => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      },
      svg: {
        fontCache: 'global',
      },
    };

    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
    script.async = true;

    document.body.appendChild(script);

    const scriptMathJax = document.createElement('script');
    scriptMathJax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-svg.js';
    scriptMathJax.async = true;

    document.body.appendChild(scriptMathJax);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptMathJax);
    };
  }, []);

  return null;
};

export default MathJaxConfig;
