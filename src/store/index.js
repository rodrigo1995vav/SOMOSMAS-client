import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import contact from './slices/contact'
export default configureStore({
    //estados globales
    reducer: {
        userLogged,
        contact
    },
});
