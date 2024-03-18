import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'; 


export const Header = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName, }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img  className="w-40" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="heading-log"/>
      <div>
         <button type="button" onClick={handleSignOut} className='p-4 text-white'>Sign Out</button>
      </div>
    </div>
  )
}

