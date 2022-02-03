// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8AO3-4L-5v7PG73UKlDsPv1myUeP04U0',
  authDomain: 'iwpp-59744.firebaseapp.com',
  projectId: 'iwpp-59744',
  storageBucket: 'iwpp-59744.appspot.com',
  messagingSenderId: '1034093323124',
  appId: '1:1034093323124:web:c9bcc62f62fd7733dd0221',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
