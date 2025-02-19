import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allApplicants: [],
}

const applicationSlices = createSlice({

    name: "applicationslc",
    initialState,

    reducers: {

        SetAllapplicants: (state, action) => {
            state.allApplicants = action.payload
        },

        
    }

});

export const { SetAllapplicants} = applicationSlices.actions
export default applicationSlices.reducer 