import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import allActivities from "./slices/activities/getAllActivities";
import loader from "./slices/loading/loading";
import contact from './slices/contact';
import allCategories from "./slices/categories/getAllCategories";
export default configureStore({
  //estados globales
  reducer: {
    userLogged,
    allActivities,
    loader,
    contact,
    allCategories
  },
});
