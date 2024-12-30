import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0iq3105-bi0IFNdQEpNLJAE8mt3f6OvI",
    authDomain: "paisa-89f3a.firebaseapp.com",
    projectId: "paisa-89f3a",
    storageBucket: "paisa-89f3a.firebasestorage.app",
    messagingSenderId: "450345513365",
    appId: "1:450345513365:web:36ac5b27aafb128381c69c"
  };

  //init firebase
 firebase.initializeApp(firebaseConfig)

 //init service
 const projectFirestore = firebase.firestore();
 const projectAuth = firebase.auth();
 
 export { projectFirestore, projectAuth }