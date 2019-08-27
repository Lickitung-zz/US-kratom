import {firestorePlugin} from 'vuefire'
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const config = {
    apiKey: "AIzaSyCs4v3X_TdSDmccKqA6k8B-47-UmiDmMzQ",
    authDomain: "us-kratom-baybee.firebaseapp.com",
    databaseURL: "https://us-kratom-baybee.firebaseio.com",
    projectId: "us-kratom-baybee",
    storageBucket: "us-kratom-baybee.appspot.com",
    messagingSenderId: "894796551336",
    appId: "1:894796551336:web:70af5341b328da51"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.firestore();
} else {
    firebase.app();
}

export const db = firebase.firestore();