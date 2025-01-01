import React, { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext';
import { projectAuth } from '../firebase/config';


export const useLogin = () => {
    const [isCancelled , setIsCancelled] = useState(false); //for abortion
    const[isPending , setIsPending] = useState('');
    const[error , setError] = useState('');
    const {dispatch} = useAuthContext();


    const login = async(email , password) => {
        setIsPending(true);
        setError(null);

        try {

            //method firebase
            const res = await projectAuth.signInWithEmailAndPassword(email , password)
            //dispatch
            dispatch({type: 'LOGIN' , payload: res.user})
            //update the state
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
            
        } catch (err) {
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    } , [])

  return {login , error , isPending}
}
