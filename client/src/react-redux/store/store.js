import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import jobReducer from "../slice/jobSlice";

export const store = configureStore({

    reducer: {
        userAuth: userReducer, //userAuth comes from name (userSlice.js)
        jobslc: jobReducer
    }

})