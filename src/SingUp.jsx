import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "./firebase/firebase"

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input type="email" name="" id="" placeholder='Email...' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp