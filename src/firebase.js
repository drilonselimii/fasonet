import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlmVmHUOV7ux0hWp6kfIydzbJCfCguCV8",
    authDomain: "fasonet-cb82a.firebaseapp.com",
    projectId: "fasonet-cb82a",
    storageBucket: "fasonet-cb82a.appspot.com",
    messagingSenderId: "935667464231",
    appId: "1:935667464231:web:da79ba282e4dc507757602"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider, storage };