
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA0PiznkGCwrTBvrxEC2Na5jKEK3dVTfnk",
    authDomain: "clone-ed601.firebaseapp.com",
    databaseURL: "https://clone-ed601.firebaseio.com",
    projectId: "clone-ed601",
    storageBucket: "clone-ed601.appspot.com",
    messagingSenderId: "919054258503",
    appId: "1:919054258503:web:3513cc3dbbaa3f8a4b7c62",
    measurementId: "G-S1H6JHCE2E"
}


const firebaseapp = firebase.initializeApp(firebaseConfig);

const db  = firebaseapp.firestore();

const auth = firebase.auth();


export {db , auth};