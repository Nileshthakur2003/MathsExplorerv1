import React, { useEffect, useState } from 'react';
import './App.css';
import { MEHeadingText, SearchBox } from './CustomComponents';
import Cookies from 'js-cookie';

const HomeCode = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedUsername, setLoggedUsername] = useState('');

    useEffect(() => {
        if (Cookies.get('name')) {
            setLoggedIn(true);
            setLoggedUsername(Cookies.get('name'));
        }
    }, []);

    const clearLoggedIn = () => {
        Cookies.set('name', '', { expires: -1 });
    };

    return (
        <div className='flex flex-col'>
            <MEHeadingText />

            
            <span className='flex flex-row p-10 justify-center'>
                <i>A guide to Engineering Mathematics</i>
            </span>

            {/* Search Box */}
            <SearchBox id="query" />

            {/* Buttons Section - Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 m-10'>
                <a href='/grapher/' className='flex flex-row items-center p-4 border border-solid border-gray-300 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    Grapher
                </a>

                <a href='/core/' className='flex flex-row items-center p-4 border border-solid border-gray-300 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    List Of Contents
                </a>

                <a href='/contributions/' className='flex flex-row items-center p-4 border border-solid border-gray-300 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    Contributions
                </a>
            </div>

            {/* Latest Updates Section */}
            <div className='m-10 p-4 border border-solid border-gray-300 rounded-md'>
                <h2 className='text-2xl mb-4'>Latest Updates</h2>
                <ul>
                    <li className='mb-2'>
                        <span className='font-bold'>Update 1:</span> Description of the latest update.
                    </li>
                    <li className='mb-2'>
                        <span className='font-bold'>Update 2:</span> Description of another update.
                    </li>
                    <li className='mb-2'>
                        <span className='font-bold'>Update 3:</span> Description of yet another update.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomeCode;
