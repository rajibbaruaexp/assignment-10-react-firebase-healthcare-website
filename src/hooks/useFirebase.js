import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState, useEffect } from "react";
import inititalizeAuthentication from "../firebase/firebase.init";

inititalizeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const auth = getAuth();

  //google sign in
  const signInUsingGoogle = () => {
    setIsloading(isLoading);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  //email password registration
  const registrationWithEmail = (email, password) => {
    setIsloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    setIsloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   onAuthStateChanged observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsloading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  //   sign out
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloading(false));
  };

  //   returing necessary assets
  return {
    setUser,
    user,
    signInUsingGoogle,
    logOut,
    setIsloading,
    registrationWithEmail,
    loginWithEmail,
    updateProfile,
    auth,
  };
};

export default useFirebase;
