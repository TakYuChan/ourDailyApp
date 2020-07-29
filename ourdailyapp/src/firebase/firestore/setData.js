import { firestore } from "../firebase.utils";

export const addCollectionAndDocuments = (collectionName, arrayToAdd) => {
  try {
    const collectionRef = firestore.collection(collectionName);

    console.log("ADDING COLLECTION AND DOC");

    const batch = firestore.batch();

    arrayToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    batch.commit();
  } catch (error) {
    console.log("Error adding collection and documents", error);
  }
};

export const saveGameState = (objToAdd) => {
  try {
    const collectionRef = firestore.collection("pigGame");
    console.log("Ready to add Single Document");
    const newDocRef = collectionRef.doc("game01");
    newDocRef.set(objToAdd);
    console.log("Added Single Document");
  } catch (error) {
    console.log(error);
  }
};
