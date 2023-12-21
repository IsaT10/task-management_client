// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIRCR78Ie0RM-BVE4Y_9fFttGBsoUTONU',
  authDomain: 'task-management-113a1.firebaseapp.com',
  projectId: 'task-management-113a1',
  storageBucket: 'task-management-113a1.appspot.com',
  messagingSenderId: '839631814647',
  appId: '1:839631814647:web:cdcc2f5d0fc1079bf1b8f2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
