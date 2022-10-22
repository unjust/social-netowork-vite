// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcIILiQVH92SaqzwZwEuJbY4mpNLQ_g9E',
  authDomain: 'social-network-vite.firebaseapp.com',
  projectId: 'social-network-vite',
  storageBucket: 'social-network-vite.appspot.com',
  messagingSenderId: '1065185259231',
  appId: '1:1065185259231:web:6c7783c44e1895ae8ec36a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
