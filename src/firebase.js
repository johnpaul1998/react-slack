import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuKFofqGbOUh789R3NmvHH5WueJnvL1pA",
  authDomain: "react-slack-83965.firebaseapp.com",
  projectId: "react-slack-83965",
  storageBucket: "react-slack-83965.appspot.com",
  messagingSenderId: "72681875926",
  appId: "1:72681875926:web:c736ef09e4947ac3601c77",
  measurementId: "G-JQY6JZ77FJ"
};
  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();

  export { db }