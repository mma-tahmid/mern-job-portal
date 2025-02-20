import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //loading: false,
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
    searchedQuery: ""
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

        SetAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload
        },

        SetSearchJobByText: (state, action) => {
            state.searchJobByText = action.payload
        },

        SetAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload
        },

        SetSearchedQuery: (state, action) => {
            state.searchedQuery = action.payload
        }

    }

});

export const { 
    SetAllJobs,
    SetSingleJob,
    SetAllAdminJobs,
    SetSearchJobByText,
    SetAllAppliedJobs,
    SetSearchedQuery } = jobSlices.actions
export default jobSlices.reducer 