import React from 'react';
import { useNavigate } from 'react-router-dom';

const contributors = [
    { name: "Alice Johnson", role: "Mathematics Content Creator", contribution: "Linear Algebra Notes" },
    { name: "Bob Smith", role: "Developer", contribution: "Implemented Graphing Tools" },
    { name: "Charlie Lee", role: "Researcher", contribution: "Multivariable Calculus Insights" },
    { name: "David Kim", role: "UI Designer", contribution: "Designed Core UI" },
    { name: "Emma Watson", role: "Statistics Expert", contribution: "Probability Theory Contributions" },
    { name: "Frank Liu", role: "Algorithm Specialist", contribution: "Optimized Calculation Methods" }
];

const Contributions = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center p-6">
            {/* Back Button */}
            <button 
                className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            {/* Page Title */}
            <h2 className="text-2xl font-semibold mb-6">Contributors</h2>

            {/* Contributors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {contributors.map((contributor, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
                        <h3 className="text-lg font-bold">{contributor.name}</h3>
                        <p className="text-gray-600">{contributor.role}</p>
                        <p className="mt-2 text-sm text-gray-700"><strong>Contribution:</strong> {contributor.contribution}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributions;
