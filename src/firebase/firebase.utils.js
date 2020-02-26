import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Typically it is good practice not to expose your API key publicly, 
// but in the case of firebase, we have to do so 
// because this is how firebase knows the application is ours! This is perfectly safe, 
// and the intended purpose of this public API key. 
const config = {
    apiKey: "AIzaSyAn5ux_a9NSL5zl5v05SB38bDf-p9dBmvY",
    authDomain: "react-ecommerce-shop-db.firebaseapp.com",
    databaseURL: "https://react-ecommerce-shop-db.firebaseio.com",
    projectId: "react-ecommerce-shop-db",
    storageBucket: "react-ecommerce-shop-db.appspot.com",
    messagingSenderId: "1046825878056",
    appId: "1:1046825878056:web:8996a3aad21ffbd7276b1d",
    measurementId: "G-Y30HZ8LNXZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
      })

      return await batch.commit()
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;