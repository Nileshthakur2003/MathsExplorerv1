import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TopicLink } from "./further";

const all_topics = [{
    "topic_id": "apse",
    "topic_name": "Arithmetic Progressions",
    "url": "/apse"
}, {
    "topic_id": "gpse",
    "topic_name": "Geometric Progressions",
    "url": "/gpse"
}, {
    "topic_id": "hpsi",
    "topic_name": "Harmonic Progressions",
    "url": "/hpsi"
}, {
    "topic_id": "canf",
    "topic_name": "Convergence and Divergence",
    "url": "/canf"
}, {
    "topic_id": "pser",
    "topic_name": "Power Series",
    "url": "/pser"
}, {
    "topic_id": "fts",
    "topic_name": "Fourier Series",
    "url": "/fts"
}, {
    "topic_id": "ltst",
    "topic_name": "Limit and Summation Theorems",
    "url": "/ltst"
}];

const SeqSeries = () => {

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
                <i aria-flowto='left'>MathsExplorer &gt; Sequence And Series</i>
                <h1 className='text-2xl font-semibold mb-4'>Sequence And Series</h1>
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

export default SeqSeries;
