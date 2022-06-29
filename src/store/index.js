import { configureStore } from "@reduxjs/toolkit";

// reducers
import logged from "./slices/users";
export default configureStore({
  //estados globales
  reducer: {
    logged,
  },
});
