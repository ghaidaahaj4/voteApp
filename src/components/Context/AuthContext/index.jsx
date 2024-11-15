/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggidIn, setUserLogIn] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, initilizeUser);
    return unsbscribe;
  }, []);
  async function initilizeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLogIn(true);
    } else {
      setCurrentUser(null);
      setUserLogIn(false);
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggidIn,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
