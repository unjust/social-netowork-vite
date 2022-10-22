import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const signIn = (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      throw new Error(errorMessage);
    });
};
