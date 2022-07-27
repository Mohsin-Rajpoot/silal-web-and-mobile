// Imports: Dependencies
// import { createStore } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Imports: Redux Root Reducer
import rootReducer from "./rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import hardSet from "redux-persist/lib/stateReconciler/hardSet";

// Imports: Redux Root Saga
import { rootSaga } from "./rootSaga";

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export { store, persistor };
