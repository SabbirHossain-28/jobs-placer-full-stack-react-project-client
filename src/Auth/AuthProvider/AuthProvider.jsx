import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../FirebaseConfig/firebase.config";

export const AuthContext=createContext(null);

const AuthProvider=({children})=>{
    const auth=getAuth(app);
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,activeUser=>{
            setUser(activeUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[auth])

    const authInfo={loading,createUser,loginUser,logOutUser,user}
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;
