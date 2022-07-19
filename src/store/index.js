import { configureStore } from "@reduxjs/toolkit";

// reducers
import userLogged from "./slices/users";
import contact from './slices/contact';
import allCategories from "./slices/categories/getAllCategories";
export default configureStore({
    //estados globales
    reducer: {
        userLogged,
        contact,
        allCategories
    },
});
