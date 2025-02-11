import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    //loading: false,
    singleCompany: null,
    allCompanies: [],
    searchCompanyByText: ""
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

        SetAllCompanies: (state, action) => {
            state.allCompanies = action.payload
        },

        SetSearchCompanyByText: (state, action) => {
            state.searchCompanyByText = action.payload
        }

    }

});

export const { SetSingleCompany, SetAllCompanies, SetSearchCompanyByText } = companySlices.actions
export default companySlices.reducer 