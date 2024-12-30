import React, { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup';


export default function Signup() {
    //states
    const [displayName ,setDisplayName] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");

    //useSignup hook
    const {error , isPending , signup } = useSignup();

    //functions
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email , password , displayName);

    }


  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Sign Up</h2>
        <label>
            <span>Username: </span>
            <input type="text" 
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            />
        </label>
        <label>
            <span>Email: </span>
            <input type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
             />
        </label>

        <label>
            <span>Password: </span>
            <input type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </label>
        {!isPending && <button className='btn'>Sign Up</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        {error && <p>{error}</p>}
    </form>
  )
}
