import { firebase, firestore } from 'configs';
import { Cookies } from 'js-cookie'
import {
  updateDisplayName,
  updatePhotoUrl,
  updateEmail,
  updateCurrentPage
 } from 'domain/store/reducers'
export function googleSignIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let googleToken = result.credential.accessToken;

    const { displayName, photoURL, email, uid } = result.user;
    updateDisplayName(displayName)
    updatePhotoUrl(photoURL)
    updateEmail(email)
    updateCurrentPage('UPLOAD');
    newFirebaseUser(result.user);

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}
export function facebookSignIn() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    const { displayName, photoURL, email } = result.user;
    updateDisplayName(displayName)
    updatePhotoUrl(`${photoURL}?type=large`)
    updateEmail(email)
    updateCurrentPage('UPLOAD');
    newFirebaseUser(result.user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

type firebaseUser = {
  uid: string,
  displayName: string,
  photoURL: string;
  email: string;
}

export function newFirebaseUser(user:firebaseUser) {
  const { displayName, photoURL, email, uid } = user;
  firestore.collection("users").doc(uid).set({
    displayName,
    uid,
    photoURL,
    email,
  }).then(function(docRef) {
    console.log("Document written with ID: ");
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

export function isFirebaseLoggedIn(){
  return firebase.auth().currentUser;
}

export function checkUserLogin(){
  const user = isFirebaseLoggedIn();
  if(Cookies.get('uid')){

  }
  if(user){
    setUserCookie(user);
  }

}

export function setUserCookie({displayName, uid, photoURL}) {
  Cookies.set('displayName', displayName)
  Cookies.set('uid', uid)
  Cookies.set('photoURL', photoURL)
}

function persistentLogin(authFunction){
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return authFunction()
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
s
