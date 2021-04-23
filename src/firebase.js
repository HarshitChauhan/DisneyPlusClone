import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAFeiZnhkpQBFqa41ZkpQ1JElOWoGPnCvI",
    authDomain: "disneyplus-2021.firebaseapp.com",
    projectId: "disneyplus-2021",
    storageBucket: "disneyplus-2021.appspot.com",
    messagingSenderId: "374768603509",
    appId: "1:374768603509:web:ec723c817bab588b35833c",
    measurementId: "G-2J45YB1VPY"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth, provider, storage};
export default db;