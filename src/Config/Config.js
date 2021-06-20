import firebase from 'firebase';

 var config = {
//Your api
};
const fire = firebase.initializeApp(config);
const db=firebase.firestore();
const storage = firebase.storage()
export {db, storage, fire as default}