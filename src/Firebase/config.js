import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyDZmlJZGaanDfb7UKl5esps9q503fJ7wrY",
    authDomain: "react-coder-app-e75ae.firebaseapp.com",
    projectId: "react-coder-app-e75ae",
    storageBucket: "react-coder-app-e75ae.appspot.com",
    messagingSenderId: "639964624966",
    appId: "1:639964624966:web:a82af1b25ddc09d155f247"
  };
  
  const app = firebase.initializeApp(firebaseConfig)


  export const getFirestore = () => {
      return firebase.firestore(app)
      
  }
  
  const auth = firebase.auth();
  const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
  };
  
  export { auth, providers };
  export default firebase;