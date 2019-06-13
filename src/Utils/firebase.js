import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.DATABASEURL,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

export default firebase.initializeApp(firebaseConfig);
// const settings = { timestampsInSnapshots: true };
window.firebase = firebase;

export const firestore = firebase.firestore();
