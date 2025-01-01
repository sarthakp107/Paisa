import React from 'react'
import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const [error , setError] = useState(null);
    const [isPending , setIsPending] = useState(null);
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
            setIsPending(false);
            setError(null);
            
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
        }
    }

  return  {logout , error , isPending}
}
