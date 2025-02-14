import React from 'react';
import { useNavigate } from 'react-router-dom';

const Core = () => {
    const navigate = useNavigate();

    const topics = [
        { name: "Linear Algebra", url: "linearAlgebra" },
        { name: "Sequence & Series", url: "sequenceSeries" },
        { name: "Multivariable Calculus", url: "multivariableCalc" },
        { name: "Statistics & Probability", url: "statProbablity" },
        { name: "Differential Equations", url: "#differential-equations" },
        { name: "Complex Analysis", url: "#complex-analysis" },
        { name: "Discrete Mathematics", url: "#discrete-mathematics" },
        { name: "Numerical Methods", url: "#numerical-methods" },
        { name: "Graph Theory", url: "#graph-theory" }
    ];

    return (
        <div className='flex flex-col items-center p-6'>
            {/* Back Button */}
            <button 
                className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                onClick={() => navigate("/")}
            >
                ← Back
            </button>

            {/* Title */}
            <h2 className='text-2xl font-semibold mb-6'>Index of All Topics</h2>

            {/* Topics Grid */}
            <div className='p-4 border border-solid border-gray-300 rounded-md grid grid-cols-1 sm:grid-cols-3 gap-3'>
                {topics.map((topic, index) => (
                    <button
                        key={index}
                        className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
                        onClick={() => window.location.href = topic.url}
                    >
                        {topic.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Core;
