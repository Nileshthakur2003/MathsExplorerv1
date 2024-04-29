import React from 'react'



const ForgotPasswordPage = () =>{

    return(
        <>
        
        <h3 className='text-left m-5'>
            <a href='/login/'>&lt; Back</a>
        </h3>
        <div className='flex flex-col border  border-l-cyan-400 ' id='login'>
            <div className='m-20'>
            <h1 className='text-base lg:text-4xl md:text-md flex flex-row'>
                     Forgot Password
            </h1>
            <span className='flex flex-col my-10 max-w-lg'>

            
            <input type='email' name='Enter recovery email' placeholder='Email' className='p-5'/>

            <button type='submit' className='rounded-none'>Recover Account</button>
            </span>
            
            <p className='text-sm mt-5 '>
                   <i> After entering Recovery Email , Please check your mail for recovery link.</i>
            </p>
            </div>
        </div>

    
        </>
    );



}
export default ForgotPasswordPage;