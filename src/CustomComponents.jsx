import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export function MEHeadingText() {

    return (
        <div className='text-xl lg:text-4xl md:text-2xl sm:text-xl text-blue-500 subpixel-antialiased '>Mathematics Explorer<sup>v1.0</sup></div>
    );
};


export function SearchBox(){


    return(
        <div className='flex flex-1 mt-15'>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="search-query" type="text" placeholder="Search Concepts"/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Search</button>
        </div>
    );
}

export function MainCard(props){

    return(
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
        </a>
        <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <Link to={props.url}>{props.content}
            

        </Link></p>
        <a href={props.url} class="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
        </a>
    </div>
</div>
    );


}



export function ImageBox(props)
{
    return(
        <img src={props.url} className='flex flex-1 w-100 h-1/2 '  />
 
    );
}