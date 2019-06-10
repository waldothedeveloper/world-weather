import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHiN4e-KQ-dDRdz1foLdjU6XHC6rzZ5Y8",
  authDomain: "weatherkast-waldothedev.firebaseapp.com",
  databaseURL: "https://weatherkast-waldothedev.firebaseio.com",
  projectId: "weatherkast-waldothedev",
  storageBucket: "",
  messagingSenderId: "721606499992",
  appId: "1:721606499992:web:ffca15e6457d6dd1"
};

firebase.initializeApp(firebaseConfig)
const settings = {timestampsInSnapshots: true};
window.firebase = firebase

export const firestore = firebase.firestore()
export default firebase