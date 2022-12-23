import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyAsQKLh0rWbDJYTcazBJJPRG0HJzwP_bVE",
    authDomain: "wynncraftbingo.firebaseapp.com",
    databaseURL: "https://wynncraftbingo-default-rtdb.firebaseio.com",
    projectId: "wynncraftbingo",
    storageBucket: "wynncraftbingo.appspot.com",
    messagingSenderId: "474526553243",
    appId: "1:474526553243:web:303e0613b655c4d36c223e",
    measurementId: "G-M26Z5QZYTE"
});

export default firebase;