import { UserProps } from '@context/UserContext';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User, signOut } from "firebase/auth";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG || '');

initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user: User) => {
  const { email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange: Function) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (data) => {
    const normalizedUser = data ? mapUserFromFirebaseAuthToUser(data) : {};
    onChange(normalizedUser);
  });
};

export const loginWithGmail = (): Promise<UserProps | {}> => {
  const gmailProvider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, gmailProvider).then((data) => {
    const { user: { email, photoURL } } = data;
    return { email, photoURL };
  });
};

export const logout = () => {
  const auth = getAuth();
  return signOut(auth);
};
