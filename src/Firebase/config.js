import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig={
    apiKey: "AIzaSyDZmlJZGaanDfb7UKl5esps9q503fJ7wrY",
    authDomain: "react-coder-app-e75ae.firebaseapp.com",
    projectId: "react-coder-app-e75ae",
    storageBucket: "react-coder-app-e75ae.appspot.com",
    messagingSenderId: "639964624966",
    appId: "1:639964624966:web:a82af1b25ddc09d155f247"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const getFirestore=()=>{
      return firebase.firestore(app)
      
    }