import { firebase } from 'configs';
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
    let token = result.credential.accessToken;
    // The signed-in user info.
    const { displayName, photoURL, email } = result.user;
    updateDisplayName(displayName)
    updatePhotoUrl(photoURL)
    updateEmail(email)
    updateCurrentPage('UPLOAD');
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
    updatePhotoUrl(photoURL)
    updateEmail(email)
    updateCurrentPage('UPLOAD');
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
