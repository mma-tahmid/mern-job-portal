import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //loading: false,
    allJobs: [],
    singleJob: null
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

        SetSingleJob: (state, action) => {
            state.singleJob = action.payload
        },

    }

});

export const { SetAllJobs, SetSingleJob } = jobSlices.actions
export default jobSlices.reducer 