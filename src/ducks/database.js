import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBUcx6W7j6kqR1EISPkPoTjnvDouwhjkvk",
  authDomain: "very-new.firebaseapp.com",
  databaseURL: "https://very-new.firebaseio.com",
  projectId: "very-new",
  storageBucket: "very-new.appspot.com",
  messagingSenderId: "589076712176"
};
firebase.initializeApp(config);

export const database = firebase.database();

export default database;