import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-8Mi0VHXqeJbXeIPIKnevUAID18ooC5s",
  authDomain: "fbdb-833ab.firebaseapp.com",
  projectId: "fbdb-833ab",
  storageBucket: "fbdb-833ab.appspot.com",
  messagingSenderId: "247869032312",
  appId: "1:247869032312:web:01573f88eb490e69512a8d"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
