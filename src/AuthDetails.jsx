import React, { useEffect, useState } from 'react'
import { auth } from "./firebase/firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen();
        }
    }, [])

    const signOutUser =  async () => {
       await signOut(auth)
    }

    return (
        <div>
            {authUser ?
                <>
                    <p>{`Signed In As ${authUser.email}`} </p>
                    <button onClick={signOutUser}>SignOut</button>
                </>
                :
                <p>SignedOut</p>}</div>
    )
}

export default AuthDetails