import React, { createContext, useState, useEffect, useContext } from 'react'
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail
 } from 'firebase/auth'
import { auth } from '../config/firebase'

const UserContext = createContext({});

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState()
  const [error, setError] = useState("")

  useEffect(()=>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, res => {
      res ? setUser(res) : setUser(null)
      setError("")
      setLoading(false)
    });
    return unsubscribe;
  }, [])

  const registerUser = (name, email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password).then(() => {
       return updateProfile(auth.currentUser, {
        displayName: name,
       })
    })
    .then((res) => console.log(res))
    .catch((err) => setError(err.message))
    .finally(()=>setLoading(false))
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((credential)=> {localStorage.setItem('userEmail', credential.user.email.toString())})
    /* .then((res) => console.log(res))
    .catch((err) => setError(err.message))
    .finally(()=>setLoading(false)); */
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  };


    
  const contextValue = {
    user,
    loading,
    error, 
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword
  };  
  return <UserContext.Provider value={contextValue}>
    {children}
  </UserContext.Provider> 
  
}
