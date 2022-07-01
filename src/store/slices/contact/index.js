import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        responseContact: null
    },
    reducers: {
        //actions
        sendInformationForContact: (state, action) => {
            state.responseContact = action.payload
        }
    }
})

export default contactSlice.reducer

export const { sendInformationForContact } = contactSlice.actions

export const contactUs = ({ email, fullName, message }) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/contacts', {
            email,
            fullName,
            message
        }).then(({ data }) => {
            dispatch(sendInformationForContact(data))
        }).catch((err) => console.log(err));
    }
}  
