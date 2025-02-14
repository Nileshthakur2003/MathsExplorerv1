import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TopicLink } from "./further";

const all_topics = [{
    "topic_id": "pvc",
    "topic_name": "Partial Derivatives",
    "url": "/pvc"
}, {
    "topic_id": "mdc",
    "topic_name": "Multiple Integrals",
    "url": "/mdc"
}, {
    "topic_id": "fvf",
    "topic_name": "Vector Fields",
    "url": "/fvf"
}, {
    "topic_id": "ll",
    "topic_name": "Line Integrals",
    "url": "/ll"
}, {
    "topic_id": "gs",
    "topic_name": "Green's Theorem",
    "url": "/gs"
}, {
    "topic_id": "dth",
    "topic_name": "Divergence Theorem",
    "url": "/dth"
}, {
    "topic_id": "sch",
    "topic_name": "Stokes' Theorem",
    "url": "/sch"
}];

const MultiCalc = () => {

    const [topics, setTopics] = useState(all_topics);
    const [menuOpen, setMenuOpen] = useState(false);

    function updateTopics(e) {
        const data = e.target.value;
        const temp = all_topics.filter((obj) => (
            obj.topic_name.toLowerCase().includes(data.toLowerCase())
        ));
        setTopics(temp);
    }

    return (
        <>
            <div className='flex flex-col mt-6'>
                <i aria-flowto='left'>MathsExplorer &gt; Multivariable Calculus</i>
                <h1 className='text-2xl font-semibold mb-4'>Multivariable Calculus</h1>
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
            </div>
            <div className='flex flex-row justify-end items-center'>
                <div className="flex">
                    <input 
                        onKeyDown={(e) => updateTopics(e)} 
                        className="shadow appearance-none border rounded py-1 px-2 dark:text-white text-black leading-tight focus:outline-none focus:shadow-outline" 
                        id="search-query" 
                        type="text" 
                        placeholder="Filter Contents..." 
                    />
                </div>
            </div>
            <div className="text-xl m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-2">
                {
                    topics.map((obj) => (
                        <TopicLink text={obj.topic_name} id={obj.topic_id} url={obj.url} />
                    ))
                }
            </div>
        </>
    );
}

export default MultiCalc;
