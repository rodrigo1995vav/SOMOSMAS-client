import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import allActivities from "./slices/activities/getAllActivities";
import loader from "./slices/loading/loading";
export default configureStore({
  //estados globales
  reducer: {
    userLogged,
    allActivities,
    loader
  },
});
