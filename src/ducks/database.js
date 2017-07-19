import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCiPZrtmJn20jagNoIguxrmVuiYUcMENMA",
  authDomain: "mynewprojectforthisthing.firebaseapp.com",
  databaseURL: "https://mynewprojectforthisthing.firebaseio.com",
  projectId: "mynewprojectforthisthing",
  storageBucket: "mynewprojectforthisthing.appspot.com",
  messagingSenderId: "112012703083"
};
firebase.initializeApp(config);

export const database = firebase.database();

export default database;

