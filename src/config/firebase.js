import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, getDocs, where} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Configuration to initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-8Mi0VHXqeJbXeIPIKnevUAID18ooC5s",
  authDomain: "fbdb-833ab.firebaseapp.com",
  projectId: "fbdb-833ab",
  storageBucket: "fbdb-833ab.appspot.com",
  messagingSenderId: "247869032312",
  appId: "1:247869032312:web:01573f88eb490e69512a8d"
};

const app = initializeApp(firebaseConfig); // initializes Firebase
const auth = getAuth(app); // gets the Firebase Authentication
const db = getFirestore(app); // gets Firebase Firestore
let originalUser; //variable that keeps the signed in user so that when you register an employee it doesn't sign in as them


//authentication function to login
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    // makes sure only active users are allowed to login
    if( data.active === true){
      await signInWithEmailAndPassword(auth, email, password);
      originalUser = auth.currentUser;
    }else{
      alert("Este usuario no existe!")
    }
  } catch (err) {
    console.error(err);
  }
};

//register employee function
const registerWithEmailAndPassword = async (name, email, password, job, lastName, dni, active) => {
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
      dni,
      active,
      userType: "empleado"
    });
    //create same user in database
    await db.collection('users').add({
      uid: user.uid,
      name: name,
      email: email,
      job: job,
      lastName: lastName,
      dni: dni,
      active: active,
      userType: "empleado"
    })
    //updates current user so firebase doesn't think you want to sign in as an employee.
    auth.updateCurrentUser(originalUser);
  } catch (err) {
    console.error(err);
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
