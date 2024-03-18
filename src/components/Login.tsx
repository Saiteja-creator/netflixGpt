import React,{useState,useRef} from 'react'
import { validate } from '../utils/validate';
import { auth } from '../utils/fireBase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {Header} from './Header'



export const Login: React.FC = () => {
  const [isSignForm,setIsSignForm] = useState<boolean>(true)
  const email=useRef<HTMLInputElement>(null)
  const name=useRef<HTMLInputElement>(null)
  const password=useRef<HTMLInputElement>(null)
  const [error,setError]=useState<string |undefined>()
  

  const toggleSign=()=>{
    setIsSignForm(!isSignForm)
  }
  const handleButtonCheck=()=>{
      // validate(email.current.value,password.current.value)
      
      if (email.current && password.current) {
        const emailValue: string = email.current.value;
        const passwordValue: string = password.current.value;
        const validateRes = validate({emailValue,passwordValue})

        setError(validateRes)
        if (error) return;
        if (!isSignForm){
          createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            
            // ...
          })
          .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+" "+errorMessage)
            // ..
          });
        }else{
          signInWithEmailAndPassword(auth,emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;


            // ...
          })
          .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+" "+errorMessage)
          });
        }

        // Now you can use emailValue and passwordValue safely
      }

     
      
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt="nxt_log"/>
        </div>
        <form className=' w-3/12 absolute bg-black p-8 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70' onSubmit={(e)=>{e.preventDefault()}}>
          <h1 className='font-bold text-3xl p-4'>{isSignForm?"Sign in":"Sign up"}</h1>
          {!isSignForm && <input ref={name} type='text' placeholder='Enter Your FulllName' className='p-2 m-2 w-full bg-gray-700'/>}
          <input ref={email} type='text' placeholder='Enter Your Email' className='p-2 m-2 w-full bg-gray-700'/>
          <input ref={password} type="password" placeholder='Enter Your Password' className='p-2 m-2 w-full bg-gray-700'/>
          <button type="button" className='p-2 m-2 bg-red-700 w-full' onClick={handleButtonCheck}>{isSignForm?"Sign in":"Sign up"}</button>
          <p className='text-red-500'>{error}</p>
          <p className='m-2 cursor-pointer' onClick={toggleSign}>{isSignForm?"New to Netflix? Sign up now.":"Alredy registered Sign in now."}</p>
        </form>
    </div>
  )
}
