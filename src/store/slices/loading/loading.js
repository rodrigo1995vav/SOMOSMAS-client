import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: 'loaderState',
    initialState: {
        loader: false
    },
    reducers: {
        //actions
        setStateLoader: (state, action) => {
            state.loader = action.payload
        }
    }
})

export default loadingSlice.reducer

export const { setStateLoader } = loadingSlice.actions

export const stateLoading = (bool) => {
    return (dispatch) => {
        dispatch(setStateLoader(bool))
    }
}
