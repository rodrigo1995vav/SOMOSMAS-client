import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Alert from "../../../services/AlertService";
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

export const contactUs = (values,onSuccess) => {
    return (dispatch) => {
        dispatch(saveInfoContact({ loading: true, responseContact: null }))
        Alert.confirmRequest({title:'Confirmar envío'},()=>
        postPublic(`${process.env.REACT_APP_PUBLIC_URL_API}/contacts`,values)
            .then((res) => {
                dispatch(saveInfoContact({ loading: false, responseContact: res.data }))
                return res
            }).catch((err) => {
                console.log(err)
                dispatch(saveInfoContact({ loading: false, error: { errorState: true, error: err.message } }))
                Alert.error({title:err.name , message:err.message})
            }),onSuccess())
        
    }
}  
