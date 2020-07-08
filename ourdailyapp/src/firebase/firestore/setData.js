export const addCollectionAndDocuments = (collectionName, objToAdd) => {
  try {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();

    objToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    batch.commit();
  } catch (error) {
    console.log("Error adding collection and documents", error);
  }
};
