import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //loading: false,
    allJobs: []
}

const jobSlices = createSlice({

    name: "jobslc",
    initialState,

    reducers: {

        // StartLoading: (state) => {
        //     state.loading = true;
        // },

        // EndLoading: (state) => {
        //     state.loading = false;
        // },

        SetAllJobs: (state, action) => {
            state.allJobs = action.payload
        },

    }

});

export const { SetAllJobs } = jobSlices.actions
export default jobSlices.reducer 