import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import allMembers from './slices/members/getAllMembers'
import allActivities from "./slices/activities/getAllActivities";
import loader from "./slices/loading/loading";
import contact from './slices/contact';
import allCategories from "./slices/categories/getAllCategories";
export default configureStore({
  //estados globales
  reducer: {
    userLogged,
    allMembers,
    allActivities,
    loader,
    contact,
    allCategories
  },
});
