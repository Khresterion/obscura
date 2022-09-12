import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSHpkYSzUlsdiRXffY4lJmVb4AOAzYXJ4",
  authDomain: "isla-obscura.firebaseapp.com",
  projectId: "isla-obscura",
  storageBucket: "isla-obscura.appspot.com",
  messagingSenderId: "1009517864048",
  appId: "1:1009517864048:web:d28a38a7b1a30b04e840b5",
});

export const auth = app.auth();
export default app;
