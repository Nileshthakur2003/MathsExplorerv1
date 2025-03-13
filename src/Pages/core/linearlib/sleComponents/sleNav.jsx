import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SleNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex flex-col mt-6 w-full lg:w-4/5 mx-auto'>
            <i aria-flowto='left' className='text-sm lg:text-base'>MathsExplorer &gt; System of Linear Equations</i>
            <h1 className='text-xl lg:text-2xl font-semibold mb-4'>System of Linear Equations</h1>
            <div className='flex flex-row justify-between mb-4 w-full'>
                <button className="w-[fit-content] bg-gray-600 text-white hover:bg-gray-700 lg:w-24 mb-2 lg:mb-0"
                    onClick={() => window.history.back()}
                >
                    ← Back
                </button>
                <div className='hidden lg:flex flex-row space-x-3'>
                    <Link to="/text" className='px-3 py-2 bg-gray-600 text-white hover:bg-gray-700'>Text</Link>
                    <Link to="/quiz" className='px-3 py-2 bg-gray-600 text-white hover:bg-gray-700'>Quiz</Link>
                    <Link to="./booksrefs" className='px-3 py-2 bg-gray-600 text-white hover:bg-gray-700'>Books/Refs.</Link>
                    <Link to="/further" className='px-3 py-2 bg-gray-600 text-white hover:bg-gray-700'>Further</Link>
                </div>
                <div className='lg:hidden relative'>
                    <button 
                        className="px-3 py-2 bg-gray-600 text-white hover:bg-gray-700 w-full lg:w-auto"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Menu
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                            <Link to="/text" className='block px-4 py-2 text-black hover:bg-gray-600 hover:text-white'>Text</Link>
                            <Link to="/quiz" className='block px-4 py-2 text-black hover:bg-gray-600 hover:text-white'>Quiz</Link>
                            <Link to="./booksrefs" className='block px-4 py-2 text-black hover:bg-gray-600 hover:text-white'>Books/Refs.</Link>
                            <Link to="/further" className='block px-4 py-2 text-black hover:bg-gray-600 hover:text-white'>Further</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SleNav;
