// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20L6I6p4FdDSsz_SHNcjV4LmvDTn-QCo",
  authDomain: "comparador-de-precios-a9997.firebaseapp.com",
  projectId: "comparador-de-precios-a9997",
  storageBucket: "comparador-de-precios-a9997.appspot.com",
  messagingSenderId: "205661284753",
  appId: "1:205661284753:web:455777bda5d3b1d5cb5230",
  measurementId: "G-56CYTQ1WS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);