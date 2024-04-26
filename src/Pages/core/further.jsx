import React from 'react';
import { Outlet,Link } from 'react-router-dom';



export function TopicLink(props)
{
    return (
        <span className='font-medium text-blue-600 dark:text-blue-500 hover:bg-blue-200 hover:text-black cursor-pointer p-6'>
            <Link to={props.url}>{props.text}</Link>
        </span>
    );
}