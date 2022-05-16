import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc, QuerySnapshot, } from "firebase/firestore";

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
let originalUser; //variable that keeps the signed in user
let userInfo = []; //list that keeps all existing users


//authentication function to login
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    originalUser = auth.currentUser;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//register user function
const registerWithEmailAndPassword = async (name, email, password, job, lastName, dni) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    //create a new user in auth
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      job,
      lastName,
      dni
    });
    //create same user in database
    await db.collection('users').add({
      uid: user.uid,
      name: name,
      email: email,
      job: job,
      lastName: lastName,
      dni: dni

    })
    //updates current user so firebase doesn't think you want to sign in as an employee.
    auth.updateCurrentUser(originalUser);
    console.log(originalUser)
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  auth.updateCurrentUser(originalUser);
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
  registerWithEmailAndPassword,
  originalUser
};
