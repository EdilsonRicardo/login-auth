import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./firebase/firebase"


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input type="email" name="" id="" placeholder='Email...' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default SignIn