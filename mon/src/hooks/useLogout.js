import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [error , setError] = useState(null);
    const [isPending , setIsPending] = useState(null);

    //for handling abort
    const [isCancelled, setIsCancelled] = useState(false);

    const {dispatch} = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        //sign the user out
        try {
            //firebase method
            const res = await projectAuth.signOut();
            
            //dispatch logout action
            dispatch({type: 'LOGOUT'})

            //update the state
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            } 
        } catch (error) {
            if(!isCancelled){
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    } , [])

  return  {logout , error , isPending}
}
