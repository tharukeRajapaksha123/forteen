import firebase from "firebase"
import * as fb from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCELmOSQVJcnU_EIpOyJ_lQfGuB2yXGJ9A",
    authDomain: "chatapp-724ab.firebaseapp.com",
    databaseURL: "https://chatapp-724ab.firebaseio.com",
    projectId: "chatapp-724ab",
    storageBucket: "chatapp-724ab.appspot.com",
    messagingSenderId: "189313835244",
    appId: "1:189313835244:web:2f479eba655c77553e05c9",
    measurementId: "G-MBNJKP78BL"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const storage = fb.storage()
const db = app.firestore()

export { auth, db, storage }