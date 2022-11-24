import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrHynm1VdQUouz1LC8mIznuDUsp0BNDCY",
    authDomain: "clone-af56c.firebaseapp.com",
    projectId: "clone-af56c",
    storageBucket: "clone-af56c.appspot.com",
    messagingSenderId: "372763639072",
    appId: "1:372763639072:web:fe0ca7a4e71cbc4d822b45",
    measurementId: "G-GDE1SKBG2R"
  };

//Initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //Set up DB and auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  //export DB and Auth
  export {db,auth};