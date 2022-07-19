import { createSlice } from "@reduxjs/toolkit";
import {  getPublic } from "../../../services/apiServices";


export const membersSlice = createSlice({
    name: "allMembers",
    initialState: {
        members: null,
        loading: false,
        error: {
            errorState: false,
            error: ""
        }
    },
    reducers: {
        //actions
        setStateMember: (state, action) => {
            
            if (action.payload.loading) {
                state.loading = action.payload.loading;
            }
            if (action.payload.members) {
                state.loading = action.payload.loading;
                state.members = action.payload.members;
            }
            if (action.payload.error) {
                state.error = action.payload.error;
                state.loading = action.payload.loading;
            }
        },
    },
});

export default membersSlice.reducer;


export const { setStateMember } = membersSlice.actions;

export const getAllMembers = (page,limit) => {
    return (dispatch) => {
        dispatch(setStateMember({ loading: true }))
        getPublic(`${process.env.REACT_APP_PUBLIC_URL_API}/members?page=${page}&limit=${limit}`)
            .then(({ data }) => {
                dispatch(setStateMember({ loading: false, members: { ...data } }));
            }).catch((err) => {
                console.log(err)
                dispatch(setStateMember({ loading: false, error: { errorState: true, error: err.message } }))
            });
    };
};