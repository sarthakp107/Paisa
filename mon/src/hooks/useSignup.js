import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSignup = () => {
    const [error , setError] = useState('')
    const [isPending , setIsPending] = useState('')

    const signup = async(email , password , displayName) => {
        setError(null);
        setIsPending(true);

        try {
            //signup the user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password) //creates new user and stores the email and password
            console.log(res.user);

            if(!res){
                throw new Error('Could not complete signup');
            }

            //update the profile and set the display name 

            await res.user.updateProfile( { displayName}); // {displayName : displayName}
            setIsPending(false);
            setError(null);
            
        } catch (error) {
            console.log(error.message)
            setError(error.message);
            setIsPending(false);
        }
    }

    return {error , isPending , signup}
}