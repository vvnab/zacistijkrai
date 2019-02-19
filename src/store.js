import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from "firebase/app";
import "firebase/firestore";

import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

var fireBaseConfig = {
  apiKey: "AIzaSyBTkU7C936zDSkf8C7HZlEb-2VBDXr7q5M",
  authDomain: "zacistijkrai.firebaseapp.com",
  databaseURL: "https://zacistijkrai.firebaseio.com",
  projectId: "zacistijkrai",
  storageBucket: "zacistijkrai.appspot.com",
  messagingSenderId: "473465374488"
};

firebase.initializeApp(fireBaseConfig);
const db = firebase.firestore();

db.collection("profiles")
  .onSnapshot(snapshot => {
    const profiles = [];
    snapshot.docs.forEach(i => {
      profiles.push(i.data());
      store.dispatch({
        type: "STORE/DOC_COUNT",
        payload: profiles.length
      });
    });
  });

export { store, db };