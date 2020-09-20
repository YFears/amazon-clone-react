import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUcVwC1ss1MwexjACCwaF7Yu7AJ0oz3R4",
    authDomain: "clone-af183.firebaseapp.com",
    databaseURL: "https://clone-af183.firebaseio.com",
    projectId: "clone-af183",
    storageBucket: "clone-af183.appspot.com",
    messagingSenderId: "547714917776",
    appId: "1:547714917776:web:14a157c0007084e62cff15",
    measurementId: "G-577ZPCTHK3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};