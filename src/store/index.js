import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import allMembers from './slices/members/getAllMembers'
export default configureStore({
  //estados globales
  reducer: {
    userLogged,
    allMembers
  },
});
