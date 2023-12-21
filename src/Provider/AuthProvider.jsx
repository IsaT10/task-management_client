import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../config/firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const verifyEmail = () => {
    setLoading(true);

    return sendEmailVerification(auth.currentUser);
  };

  const resetPassword = (email) => {
    setLoading(true);

    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);

      //   const userInfo = { email: currentUser?.email };
      //   if (currentUser) {
      //     const res = await axios.post('/jwt', userInfo);
      //     // axios.post('/jwt', userInfo).then((res) => {

      //     if (res.data.token) {
      //       localStorage.setItem('token', res.data.token);
      //       setLoading(false);
      //     }
      //   } else {
      //     localStorage.removeItem('token');
      //     setLoading(false);
      //   }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logIn,
        googleSignIn,
        logOut,
        verifyEmail,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
