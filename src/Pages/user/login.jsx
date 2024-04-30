import React from 'react'



const LoginPage = () =>{

    return(
        <>
        
        <h3 className='text-left m-5'>
            <a href='/'>&lt; Back</a>
        </h3>
        <div className='flex flex-col border  border-l-cyan-400 ' id='login'>
            <div className='m-[4rem]'>
            <h1 className='text-base lg:text-4xl md:text-md flex flex-row'>
                     Login
            </h1>
            <span className='flex flex-col my-10 max-w-lg'>
            <input type='text' name='username' placeholder='Username' className='p-5'/>

            <input type='password' name='password' placeholder='password' className='p-5'/>

            <button type='submit' className='rounded-none'>Login</button>
            </span>
            <p>
            <a href='/recoverAccount/' className='border border-l-blue-500 p-1'>Forgot Password?</a>
            </p>
            <p className='mt-5 '>
                    Dont have an account,
                    <br></br><a href='/register/' >Register Here</a>
            </p>
            </div>
        </div>

    
        </>
    );



}
export default LoginPage;