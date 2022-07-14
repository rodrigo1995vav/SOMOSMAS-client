import { createSlice } from "@reduxjs/toolkit";
import { getPrivate } from "../../../services/apiServices";


export const activitySlice = createSlice({
    name: "allCategories",
    initialState: {
        categories: null,
        loading: false,
        error: {
            errorState: false,
            error: ""
        }
    },
    reducers: {
        //actions
        setStateActivity: (state, action) => {

            if (action.payload.loading) {
                state.loading = action.payload.loading;
            }
            if (action.payload.categories) {
                state.loading = action.payload.loading;
                state.categories = action.payload.categories;
            }
            if (action.payload.error) {
                state.error = action.payload.error;
                state.loading = action.payload.loading;
            }
        },
    },
});

export default activitySlice.reducer;


export const { setStateActivity } = activitySlice.actions;

export const getAllCategories = (page) => {
    return (dispatch) => {
        dispatch(setStateActivity({ loading: true }))
        getPrivate(`${process.env.REACT_APP_PUBLIC_URL_API}/categories/?page=${page}`)
            .then(({ data }) => {
                dispatch(setStateActivity({ loading: false, categories: { ...data } })); //esto pasa al actions de setStateActivity a la propiedad de payload     
            }).catch((err) => {
                console.log(err)
                dispatch(setStateActivity({ loading: false, error: { errorState: true, error: err.message } }))
            });
    };
};