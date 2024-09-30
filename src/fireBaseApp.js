// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAUgYOXxB12HglZT6LxSG-Sb3bdDQBCLJ4',
  authDomain: 'usuarios-b7418.firebaseapp.com',
  projectId: 'usuarios-b7418',
  storageBucket: 'usuarios-b7418.appspot.com',
  messagingSenderId: '552037725452',
  appId: '1:552037725452:web:a40c90c2cc3e9de3e4c529'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)

export { $db }
