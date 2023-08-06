// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlKDCHTtAV8cPgqbdqUJPjXHjVB213Tfg",
    authDomain: "subscription-app-63490.firebaseapp.com",
    projectId: "subscription-app-63490",
    storageBucket: "subscription-app-63490.appspot.com",
    messagingSenderId: "25029510942",
    appId: "1:25029510942:web:e6d289931ea9626d30ab0f"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { auth };
export default db;