import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAtmhKbajvfftAY34PKVsMUfCglDxQCZBQ",
  authDomain: "ourdailyapp.firebaseapp.com",
  databaseURL: "https://ourdailyapp.firebaseio.com",
  projectId: "ourdailyapp",
  storageBucket: "ourdailyapp.appspot.com",
  messagingSenderId: "802609740539",
  appId: "1:802609740539:web:ad5066d9ce22714a10ce5e",
  measurementId: "G-XKBNYDPQ1F",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// =============== Custom functions =================

//===== firestore =====

//===== User =====
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`user/${user.uid}`);

  const userSnapShot = await userRef.get();
  // console.log(user);
  if (!userSnapShot.exists) {
    const { displayName, photoURL, email } = user;

    const createdAt = new Date();

    try {
      await userRef.set({
        //In Google Log In Auth
        displayName,
        photoURL,
        email,
        createdAt,
        //From email password form
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
};

export default firebase;
