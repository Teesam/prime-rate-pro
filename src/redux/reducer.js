import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import { persistReducer } from "redux-persist";
import Storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    Storage,
    whitelist: [ 'auth' ]
}

const rootReducer = combineReducers({
    auth: AuthReducer
})

export default persistReducer( persistConfig, rootReducer );