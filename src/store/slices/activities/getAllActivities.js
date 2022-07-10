import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getPrivate } from "../../../services/apiServices";
import { stateLoading } from "../loading/loading";
export const activitySlice = createSlice({
    name: "allActivities",
    initialState: {
        activities: {
            total_activities: null,
            activities: null
        }
    },
    reducers: {
        //actions
        setStateActivity: (state, action) => {
            state.activities = action.payload;
        },
    },
});

export default activitySlice.reducer;


export const { setStateActivity } = activitySlice.actions;

export const getAllActivities = (page) => {
    return (dispatch) => {
        dispatch(stateLoading(true))
        getPrivate(`http://localhost:3001/activity/list?page=${page}`)
            .then(({ data }) => {
                dispatch(setStateActivity(data)); //esto pasa al actions de setStateActivity a la propiedad de payload
                dispatch(stateLoading(false))
            })
            .catch((err) => console.log(err));
    };
};