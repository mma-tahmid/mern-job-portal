import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
}

const userSlices = createSlice({

    name: "userAuth",
    initialState,

    reducers: {

        StartLoading: (state) => {
            state.loading = true;
        },

        EndLoading: (state) => {
            state.loading = false;
        }


    }

});

export const { StartLoading, EndLoading } = userSlices.actions
export default userSlices.reducer 