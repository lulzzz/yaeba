import { firebase, firestore } from 'configs';
import Cookies from 'js-cookie'
import {
  updateDisplayName,
  updatePhotoUrl,
  updateEmail,
  updateCurrentPage,
  updateAccessToken
} from 'domain/store/reducers'
export function googleSignIn() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, photoURL, email } = result.user;
        updateDisplayName(displayName)
        updatePhotoUrl(photoURL)
        updateAccessToken(result.credential.accessToken)
        updateEmail(email)
        updateCurrentPage('UPLOAD');
        newFirebaseUser(result.user, result.credential.accessToken);
      })
    })
    .catch(function (error) { console.error(error)});
}
export function facebookSignIn() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({ 'display': 'popup' });
      firebase.auth().useDeviceLanguage();
      return firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, photoURL, email } = result.user;
        updateDisplayName(displayName)
        updatePhotoUrl(`${photoURL}?type=large`)
        updateEmail(email)
        updateAccessToken(result.credential.accessToken)
        updateCurrentPage('UPLOAD');
        newFirebaseUser(result.user, result.credential.accessToken);
      })
    })
    .catch(function (error) {console.error(error)});
}

type firebaseUser = {
  uid: string,
  displayName: string,
  photoURL: string;
  email: string;
}

export function newFirebaseUser(user: firebaseUser, accessToken: string) {
  const { displayName, photoURL, email, uid, } = user;
  setUserCookie({displayName, uid, photoURL, accessToken});
  firestore.collection("users").doc(uid).set({
    displayName,
    uid,
    photoURL,
    email,
    accessToken
  }).then(function (docRef) {
    console.log("Document written with ID: ");
  })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}


export function checkUserLogin(login, loggedOut) {
  firebase.auth().onAuthStateChanged((user) => {
   if(user){
     login(user);
   } else {
     loggedOut();
   }
  })
}

export function setUserCookie({ displayName, uid, photoURL, accessToken }) {
  Cookies.set('displayName', displayName)
  Cookies.set('uid', uid)
  Cookies.set('accessToken', accessToken)
  Cookies.set('photoURL', photoURL)
}
