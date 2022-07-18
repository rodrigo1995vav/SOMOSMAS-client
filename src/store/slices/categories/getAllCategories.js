import { createSlice } from "@reduxjs/toolkit";
import { getPrivate } from "../../../services/apiServices";


export const categoriesSlice = createSlice({
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
        setStateCategories: (state, action) => {

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

export default categoriesSlice.reducer;


export const { setStateCategories } = categoriesSlice.actions;

export const getAllCategories = (page) => {
    return (dispatch) => {
        dispatch(setStateCategories({ loading: true }))
        getPrivate(`${process.env.REACT_APP_PUBLIC_URL_API}/categories?page=${page}`)
            .then(({ data }) => {
                dispatch(setStateCategories({ loading: false, categories: { ...data } }));
            }).catch((err) => {
                console.log(err)
                dispatch(setStateCategories({ loading: false, error: { errorState: true, error: err.message } }))
            });
    };
};

