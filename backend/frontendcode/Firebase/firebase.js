import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKvEJGZkzKLU6L5e0OJK3z7wrb8C-el-U",
    authDomain: "tshirtster.firebaseapp.com",
    databaseURL: "https://tshirtster.firebaseio.com",
    projectId: "tshirtster",
    storageBucket: "tshirtster.appspot.com",
    messagingSenderId: "264211623806",
    appId: "1:264211623806:web:f8d335ff46efd063214d2f",
    measurementId: "G-X070NQ8QH5"
  };

  firebase.initializeApp(firebaseConfig);
  const database=firebase.database()

const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};