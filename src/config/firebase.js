import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-8Mi0VHXqeJbXeIPIKnevUAID18ooC5s",
  authDomain: "fbdb-833ab.firebaseapp.com",
  projectId: "fbdb-833ab",
  storageBucket: "fbdb-833ab.appspot.com",
  messagingSenderId: "247869032312",
  appId: "1:247869032312:web:01573f88eb490e69512a8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//authentication function to login
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//logout function
const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
};
