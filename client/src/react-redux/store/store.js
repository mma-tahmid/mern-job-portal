import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const store = configureStore({

    reducer: {
        userAuth: userReducer //userAuth comes from name (userSlice.js)
    }

})