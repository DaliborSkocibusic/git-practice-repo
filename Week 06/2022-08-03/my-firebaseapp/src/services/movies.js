import { firestore } from "../firestore";

export const getMovies = async () => {
    // Specify collection we are working with
    // Returns collectionrefence object
    const collectionRef = firestore.collection("movies");

    // get records
    // Returns querySnapshot object
    const data = await collectionRef.get();

    // clean up
    const rawDocuments = data.docs;

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    // return records
    console.log(cleanedDocuments);
    
    return cleanedDocuments;
};
