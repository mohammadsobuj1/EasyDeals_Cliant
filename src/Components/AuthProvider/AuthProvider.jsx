/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


import { getAuth, } from "firebase/auth";
import { createContext } from "react";
import { app } from "../../Firebase/firebase.config";
// import { analytics } from "../../Firebase/firebase.config";




const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
 const user = "sobuj"
    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;