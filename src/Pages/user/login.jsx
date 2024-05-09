import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import cookieParser from "cookie"
import Cookies from 'js-cookie';

///import { Link } from 'react-router-dom';

 

const url = "http://localhost:3002";



// toast.configure();
const LoginPage = () =>{

    const [apiData,setApiData] = useState(null);
    const [login, setLogin] = useState(null)
    const [loginSuccess,setLoginSuccess] = useState(false);
    const [errorState,setErrorState] = useState(false);

   

    useEffect(()=>{
         Cookies.set('name', login, { expires: 7 })
     
    },[loginSuccess,login])
   

    async function fetchData(e) {
        try{
        const {data} = await axios.post(url+'/login',{
        "username":e.target.username.value,
        "password":e.target.password.value,
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
        console.log(data);
        console.log(data['result']['status']==false);

        if(data['result']['status']==true){

        setErrorState(false);
        setLogin(data['result']['result_set'][1])
        setLoginSuccess(true);
        alert('Login Successfull');
        // setting cookie


      // document.cookie = "username=John Doe; expires=Fri, 01 Jan 9999 00:00:00 GMT; path=/";
           
     
            
        }else if(data['result']['status']==false){

            setErrorState(true);
            console.log("Not Valid Login Creds");
            setLogin('Invalid Credentials');

        }
    }catch(e){
        if(e.code=="ERR_NETWORK")
        {
            setLogin("Server Down :/");
            setErrorState(true);
            setErrorState(true);
        }
    }
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();
            fetchData(e)
        
    }

    return(
        
        <>
        <h3 className='text-left m-5'>
            <a href='/'>&lt; Back</a>
        </h3>
        <div className={errorState?('flex flex-col  border-2 border-red-500'):('flex flex-col border-2 border-sky-500')} id='login'>
            <div className='m-[4rem]'>
            {!loginSuccess?(
                <>
                <h1 className='text-lg lg:text-4xl md:text-xl flex flex-row'>
                Login
       </h1>
       
       <form onSubmit={handleSubmit}>
       <span className='flex flex-col my-10 max-w-lg'>
      
           <input type='text' name="username" placeholder='Username' className='p-5'/>

           <input type='password' name="password" placeholder='password' className='p-5'/> 

           <button type='submit' className='rounded-none'>Login</button>
       
       </span>
       <span className={errorState?('flex justify-center mb-5 text-red-600'):('flex justify-center mb-5 ')}>
            {login}
       </span>
       </form>
       
       <p>
       <a href='/recoverAccount/' className='border border-l-blue-500 p-1'>Forgot Password?</a>
       </p>
       <p className='mt-5'>
               Dont have an account,
               <br></br><a href='/register/' >Register Here</a>
       </p>
   
       </>
            ):(
                
                <div className='flex flex-col'>
                <b className='text-md text-blue-500'>Welcome , {login} <br></br>Logged In Successfully</b>
                <a href='/' className='m-5 p-5 border-2 rounded-sm z-10 bg-cyan-600 text-black hover:text-grey-500'>Back to Home</a>
                </div>
                
            )}
            

    </div>
    </div>
        </>
    );



}
export default LoginPage;