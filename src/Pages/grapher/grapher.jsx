import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Plot from 'react-plotly.js';

const LinearAlgebraSLE = () => {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [selectedFunction, setSelectedFunction] = useState('cubic');

    useEffect(() => {
        generateGraph(selectedFunction);
    }, [selectedFunction]);

    const generateGraph = (functionType) => {
        const xVals = [];
        const yVals = [];
        for (let x = -10; x <= 10; x += 0.1) {
            xVals.push(x);
            if (functionType === 'cubic') {
                yVals.push(Math.pow(x, 3));
            } else if (functionType === 'quadratic') {
                yVals.push(Math.pow(x, 2));
            } else if (functionType === 'sine') {
                yVals.push(Math.sin(x));
            } else if (functionType === 'cosine') {
                yVals.push(Math.cos(x));
            }
        }
        setXValues(xVals);
        setYValues(yVals);
    };

    const handleFunctionChange = (e) => {
        setSelectedFunction(e.target.value);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                    <button style={{ marginBottom: '20px' }}>
                        &larr; Back
                    </button>
                </Link>
                <h1 className='mt-10 mb-10 sm:text-sm lg:text-2xl' style={{ marginLeft: '250px' }}>
                    The Grapher
                </h1>
            </div>
            <hr />

            <p className='mt-10'>MathsExplorer currently uses <strong className='text-green-400'>react-plotly</strong> to show all the graphs.</p>
            <br />
            <label>Select Function Type: </label>
            <select onChange={handleFunctionChange} value={selectedFunction}>
                <option value="cubic">Cubic (y = x³)</option>
                <option value="quadratic">Quadratic (y = x²)</option>
                <option value="sine">Sine (y = sin(x))</option>
                <option value="cosine">Cosine (y = cos(x))</option>
            </select>
            <br />
            <br />
            <Plot
                data={[
                    {
                        x: xValues,
                        y: yValues,
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'blue' },
                    },
                ]}
                layout={{
                    title: `Graph of ${selectedFunction} function`,
                    xaxis: { title: 'x' },
                    yaxis: { title: 'y' },
                }}
            />
        </>
    );
}

export default LinearAlgebraSLE;
