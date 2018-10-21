// Firebase config but keys in CONST file
import { FIREBASE_CONFIG } from 'vars';
export const firebase = require("firebase");
require("firebase/firestore");

const app = firebase.initializeApp(FIREBASE_CONFIG);
// Initialize Cloud Firestore through Firebase
export const firestore = firebase.firestore(app);
firebase.firestore.setLogLevel("debug");
firestore.settings({
  timestampsInSnapshots: true
});


//aliexpress api?



