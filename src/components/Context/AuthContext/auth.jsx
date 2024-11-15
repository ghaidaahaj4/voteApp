import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../../firebase/firebase";
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const doSignOut = () => {
  return auth.signOut;
};
