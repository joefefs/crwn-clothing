import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAcK2gLDRScpoUOVBIyKZFtIar3JoV5CgM",
    authDomain: "crwn-db-1ca49.firebaseapp.com",
    projectId: "crwn-db-1ca49",
    storageBucket: "crwn-db-1ca49.appspot.com",
    messagingSenderId: "623129056512",
    appId: "1:623129056512:web:c41959c1c869b2aa02cfe5"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; //if the object of userAuth (returned by firestore), does not exist, return, cut the function.

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)
    if(!snapShot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user ', error.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase