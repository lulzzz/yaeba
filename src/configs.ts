// Firebase config but keys in CONST file
import { FIREBASE_CONFIG } from 'vars';
export const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp(FIREBASE_CONFIG);
// Initialize Cloud Firestore through Firebase
export const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});


//aliexpress api?



