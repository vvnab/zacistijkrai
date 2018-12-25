import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PouchDB from "pouchdb-browser";

import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

// const db = new PouchDB("https://3a9d782f-f94a-49d0-b54f-2c3f8337b9d6-bluemix.cloudant.com/zacistijkrai");
const db = new PouchDB("zacistijkrai", {
  auto_compaction: true,
  adapter: 'idb'
});

db.sync("https://3a9d782f-f94a-49d0-b54f-2c3f8337b9d6-bluemix.cloudant.com/zacistijkrai", {
  live: true,
  retry: false
})
.on("change", change => {
  db.info().then(info => {
    store.dispatch({
      type: "STORE/DOC_COUNT",
      payload: info.doc_count
    });
  }).catch(err => console.error("error", err));
});

db.info().then(info => {
  store.dispatch({
    type: "STORE/DOC_COUNT",
    payload: info.doc_count
  });
}).catch(err => console.error("ERROR", err));

export { store, db };