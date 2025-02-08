import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //loading: false,
    singleCompany: null 
}

const companySlices = createSlice({

    name: "companyslc",
    initialState,

    reducers: {

        // StartLoading: (state) => {
        //     state.loading = true;
        // },

        // EndLoading: (state) => {
        //     state.loading = false;
        // },

        SetSingleCompany: (state, action) => {
            state.singleCompany = action.payload
        },

    }

});

export const { SetSingleCompany } = companySlices.actions
export default companySlices.reducer 