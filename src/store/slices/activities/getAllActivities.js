import { createSlice } from "@reduxjs/toolkit";
import { getPrivate } from "../../../services/apiServices";


export const activitySlice = createSlice({
    name: "allActivities",
    initialState: {
        activities: null,
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
            if (action.payload.activities) {
                state.loading = action.payload.loading;
                state.activities = action.payload.activities;
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

export const getAllActivities = (page) => {
    return (dispatch) => {
        dispatch(setStateActivity({ loading: true }))
        getPrivate(`http://localhost:3001/activity/list?page=${page}`)
            .then(({ data }) => {
                dispatch(setStateActivity({ loading: false, activities: { ...data } })); //esto pasa al actions de setStateActivity a la propiedad de payload     
            }).catch((err) => {
                console.log(err)
                dispatch(setStateActivity({ loading: false, error: { errorState: true, error: err.message } }))
            });
    };
};