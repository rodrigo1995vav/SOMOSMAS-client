import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const activitySlice = createSlice({
  name: "allActivities", 
  initialState: {
    activities: {
        total_activities:0,
        activities:[]
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
    axios
      .get("http://localhost:3001/activity/list",
      {
        params: {
            page: page
        }
      })
      .then(({ data }) => {
        dispatch(setStateActivity(data)); //esto pasa al actions de setStateActivity a la propiedad de payload
      })
      .catch((err) => console.log(err));
  };
};