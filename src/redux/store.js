import { createStore } from "redux";
import reducer from './auth/reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'root', storage}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default { store, persistor };