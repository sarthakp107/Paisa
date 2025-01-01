import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState('')
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            //signup the user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password) //creates new user and stores the email and password


            if (!res) {
                throw new Error('Could not complete signup');
            }

            //update the profile and set the display name 

            await res.user.updateProfile({ displayName }); // {displayName : displayName}

            //dispath login action
            dispatch({ type: 'LOGIN', payload: res.user })

            //update the state
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        } catch (error) {
            if (!isCancelled) {
                console.log(error.message);
                setError(error.message);
                setIsPending(false);
            }
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, signup }
}