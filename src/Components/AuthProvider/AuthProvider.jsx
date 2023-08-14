/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
// import { analytics } from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";




const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider()
    //     const googleProvider = new GoogleAuthProvider()
    //     const [user, setUser] = useState(null)
        // const [loader, setLoader] = useState(true)
        // const [reload, setReload] = useState(null)
    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const logIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const githublogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const googlelogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const changeName = (user, name, file) => {
        return updateProfile(user, {
            displayName: name, photoURL: file
        })

    }






    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, recentuser => {
            setUser(recentuser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        logIn,
        loader,
        googlelogIn,
        githublogin,
        logOut,
        changeName,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */

// import React, { createContext, useEffect, useState } from 'react';
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// import { GithubAuthProvider } from "firebase/auth";
// import app from '../Firebase/firebase.config';



// const auth = getAuth(app)
// export const AuthContext = createContext(null)
// const AuthProvider = ({ children }) => {
//     const githubProvider = new GithubAuthProvider()
//     const googleProvider = new GoogleAuthProvider()
//     const [user, setUser] = useState(null)
//     const [loader, setLoader] = useState(true)
//     const [reload, setReload] = useState(null)


//     const createUser = (email, password) => {
//         setLoader(false)
//         return createUserWithEmailAndPassword(auth, email, password)

//     }


//     const logIn = (email, password) => {
//         setLoader(false)
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const logOut = () => {
//         return signOut(auth)
//     }
//     const gitlogIn = () => {
//         return signInWithPopup(auth, githubProvider)
//     }

//     const googlelogIn = () => {
//         return signInWithPopup(auth, googleProvider)
//     }

//     const changeName = (user, name, file) => {
//         return updateProfile(user, {
//             displayName: name, photoURL: file
//         })

//     }



//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, recentuser => {
//             setUser(recentuser)
//             setLoader(false)
//         })
//         return () => {
//             unsubscribe()
//         }
//     }, [reload])

//     const authInfo = {
//         user,
//         loader,
//         setReload,
//         createUser,
//         changeName,
//         logIn,
//         logOut,
//         gitlogIn,
//         googlelogIn,

//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;