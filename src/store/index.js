import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
export default configureStore({
  //estados globales
  reducer: {
    userLogged,
  },
});
