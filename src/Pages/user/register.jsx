import React from 'react'



const RegisterPage = () =>{

    return(
        <>
        
        <h3 className='text-left my-5'>
            <a href='/login/' className='border border-l-blue-600 rounded-none p-5'>Back</a>
        </h3>
        <div className='flex flex-col border  border-l-cyan-400 ' id='login'>
            <div className='m-20'>
            <h1 className='text-base lg:text-4xl md:text-md flex flex-row'>
                     Register
            </h1>
            <span className='flex flex-col my-10 max-w-lg'>

            
            <input type='email' name='username' placeholder='Email' className='p-5'/>


            <input type='text' name='username' placeholder='Username' className='p-5'/>

            <input type='password' name='password' placeholder='password' className='p-5'/>

            <button type='submit' className='rounded-none'>Login</button>
            </span>

            <p className='mt-5 '>
                    Dont have an account,
                    <br></br><a href='/register/' >Register Here</a>
            </p>
            </div>
        </div>

    
        </>
    );



}
export default RegisterPage;