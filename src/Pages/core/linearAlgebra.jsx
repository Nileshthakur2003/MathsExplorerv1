import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import { TopicLink } from "./further";
import { useState } from "react";

const all_topics = [{
    "topic_id": "sle",
    "topic_name": "Systems of linear equations",
    "url": "./sle"
}, {
    "topic_id": "rref",
    "topic_name": "Row reduction and echelon forms",
    "url": "/rref"
}, {
    "topic_id": "moii",
    "topic_name": "Matrix operations, including inverses",
    "url": "/moii"
}, {
    "topic_id": "blkm",
    "topic_name": "Block matrices",
    "url": "/blkm"
}, {
    "topic_id": "ldid",
    "topic_name": "Linear dependence and independence",
    "url": "/ldid"
}, {
    "topic_id": "sbd",
    "topic_name": "Subspaces and bases and dimensions",
    "url": "/sbd"
}, {
    "topic_id": "obop",
    "topic_name": "Orthogonal bases and orthogonal projections",
    "url": "/obop"
}, {
    "topic_id": "gsp",
    "topic_name": "Gram-Schmidt process",
    "url": "/gsp"
}, {
    "topic_id": "dtp",
    "topic_name": "Determinants and their properties",
    "url": "/sle"
}, {
    "topic_id": "cr",
    "topic_name": "Cramer’s Rule",
    "url": "/sle"
}, {
    "topic_id": "ee",
    "topic_name": "Eigenvalues and eigenvectors",
    "url": "/sle"
}, {
    "topic_id": "doam",
    "topic_name": "Diagonalization of a matrix",
    "url": "/sle"
}, {
    "topic_id": "sym",
    "topic_name": "Symmetric matrices",
    "url": "/sle"
}, {
    "topic_id": "pdm",
    "topic_name": "Positive definite matrices",
    "url": "/sle"
}, {
    "topic_id": "sm",
    "topic_name": "Similar matrices",
    "url": "/sle"
}, {
    "topic_id": "lt",
    "topic_name": "Linear transformations",
    "url": "/sle"
}, {
    "topic_id": "svd",
    "topic_name": "Singular Value Decomposition",
    "url": "/sle"
}];

const LinearAlgebra = () => {

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
                <i aria-flowto='left'>MathsExplorer &gt; LinearAlgebra</i>
                <h1 className='text-2xl font-semibold mb-4'>Linear Algebra</h1>
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

export default LinearAlgebra;
