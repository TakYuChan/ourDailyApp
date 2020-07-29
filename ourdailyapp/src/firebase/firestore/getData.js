import { firestore } from "../firebase.utils";

export const getPigGameState = async () => {
  const docRef = firestore.collection("pigGame").doc("game01");
  const docSnapShot = await docRef.get();
  if (docSnapShot.exists) {
    console.log("docSnapShot", docSnapShot.data());
    return docSnapShot.data();
  } else {
    return null;
  }
};
