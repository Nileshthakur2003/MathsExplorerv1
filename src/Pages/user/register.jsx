import axios from 'axios'
import React,{useState} from 'react'


const url = "http://localhost:3002";

const RegisterPage = () =>{

    const [status,setStatus]= useState()
    const [errorState,setErrorState] = useState(false)

    async function registerUser(e) {
        try{
        if(e.target.password.value!="" && e.target.username.value!="" && e.target.email.value!="")
        {
        const {data} = await axios.post(url+'/register',{
        
        "username":e.target.username.value,
        "password":e.target.password.value,
        "email":e.target.email.value,
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
        console.log(data);

        if(data['status']==true){

            
            setStatus('Registered Successfully')


        }else if(data['status']==false){
            setErrorState(true);
            setStatus("Can't Register Successfully")
            
        }
    }else{
        setErrorState(true);
        setStatus("All fields are required!");
    }

    }catch(e){
        if(e.code=="ERR_NETWORK")
        {   
            setErrorState(true);
            setStatus('Server Down :/');
        }else{
            console.log(e);
        }
    }
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();
            registerUser(e)
        
    }

    return(
        <>
        
        <h3 className='text-left my-5'>
            <a href='/login/' className='border border-l-blue-600 rounded-none p-5'>Back</a>
        </h3>
        <div className={errorState?('flex flex-col  border-2 border-red-500'):('flex flex-col border-2 border-sky-500')} id='register'>
            <div className='m-[4rem]'>
            <h1 className='text-base lg:text-4xl md:text-md flex flex-row'>
                     Register
            </h1>
             <form onSubmit={handleSubmit}>
            <span className='flex flex-col my-10 max-w-lg'>
           
            
            <input type='email' name='email' placeholder='Email' className='p-5'/>


            <input type='text' name='username' placeholder='Username' className='p-5'/>

            <input type='password' name='password' placeholder='password' className='p-5'/>

            <button type='submit' className='rounded-none'>Register Account</button>

                </span>

                <span className={errorState?('flex justify-center mb-5 text-red-600'):('flex justify-center mb-5 ')}>
            {status}
            </span>
            </form>
           
           
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