import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../FirebaseConfig/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const currentUserEmail=currentUser?.email || user?.email;
      const activeUser={email:currentUserEmail}
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axios.post(`${import.meta.env.VITE_LOCAL_URL}/jwt`,activeUser,{withCredentials:true})
        .then(res =>{
          console.log("Response coming from server",res.data);
        })
      }
      else{
        axios.post(`${import.meta.env.VITE_LOCAL_URL}/logout`,activeUser,{withCredentials:true})
       
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth,user]);

  const authInfo = {
    loading,
    createUser,
    updateUserProfile,
    loginUser,
    loginWithGoogle,
    logOutUser,
    setUser,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
