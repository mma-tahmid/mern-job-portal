import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import jobReducer from "../slice/jobSlice";
import companyReducer from "../slice/companySlice";
import applicationReducer from "../slice/applicationSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}


const rootReducer = combineReducers({
    userAuth: userReducer, //userAuth comes from name (userSlice.js)
    jobslc: jobReducer,
    companyslc: companyReducer,
    applicationslc: applicationReducer 

})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// export const store = configureStore({

//     reducer: {
//         userAuth: userReducer, //userAuth comes from name (userSlice.js)
//         jobslc: jobReducer
//     }

// })