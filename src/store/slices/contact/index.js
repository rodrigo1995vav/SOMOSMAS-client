import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { postPublic } from "../../../services/apiServices";


export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        responseContact: null,
        loading: false,
        error: {
            errorState: false,
            error: ""
        }
    },
    reducers: {
        //actions
        saveInfoContact: (state, action) => {

            if (action.payload.loading) {
                state.loading = action.payload.loading;
            }
            if (action.payload.responseContact) {
                state.responseContact = action.payload.responseContact;
                state.loading = action.payload.loading;
            }
            if (action.payload.error) {
                state.error = action.payload.error;
                state.loading = action.payload.loading;
            }
        }
    }
})

export default contactSlice.reducer

export const { saveInfoContact } = contactSlice.actions

export const contactUs = ({ email, name, message }) => {
    return (dispatch) => {
        dispatch(saveInfoContact({ loading: true }))
        postPublic(`${process.env.REACT_APP_PUBLIC_URL_API}/contacts?email=${email}&name=${name}&message=${message}`)
            .then(({ data }) => {
                dispatch(saveInfoContact({ loading: false, responseContact: data }))
            }).catch((err) => {
                console.log(err)
                dispatch(saveInfoContact({ loading: false, error: { errorState: false, error: err.message } }))
            });
    }
}  
