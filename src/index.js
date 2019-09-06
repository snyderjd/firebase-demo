import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCGa46wmzj5keAzkcmTdmeRStoxz9OZNg",
    authDomain: "nss-front-end.firebaseapp.com",
    databaseURL: "https://nss-front-end.firebaseio.com",
    projectId: "nss-front-end",
    storageBucket: "nss-front-end.appspot.com",
    messagingSenderId: "4853733940",
    appId: "1:4853733940:web:0ee45d6301724a15a80861"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
